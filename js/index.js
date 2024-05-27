let attempts = 0;
let clickedLetters = "";
const 정답들 = [
  "GRAPES",
  "CHERRY",
  "STRAWBERRY",
  "BANANA",
  "GUAVA",
  "APPLE",
  "KIWI",
  "MANGO",
  "ORANGE",
  "LEMON"
];
let timer;

function displaySuccessModal() {
  const modal = document.getElementById("successModal");
  const closeButton = document.querySelector(".close");

  modal.style.display = "block";

  // 모달 외부를 클릭하면 모달을 닫음
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // 닫기 버튼을 클릭하면 모달을 닫음
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

function appStart() {
  const handleKeyclick = (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("board-column")) {
      const clickedLetter = clickedElement.dataset.key;
      clickedLetters += clickedLetter;
      const correctAnswer = 정답들.find((answer) => answer === clickedLetters);

      if (correctAnswer) {
        console.log("정답");
        clickedElement.classList.add("correct");

        if (clickedLetters.length === correctAnswer.length) {
          clearInterval(timer);
          setTimeout(() => {
            // 정답 처리 후 팝업 표시
            displaySuccessModal();
            clickedLetters = "";
          }, 100);
        }
      } else {
        console.log("오답");
        clickedElement.classList.add("correct");
        attempts++;
        if (attempts >= 100) {
          clearInterval(timer);
          alert("게임 오버");
          clearInterval(timer);
        }
      }
    }
  };

  const startTimer = () => {
    const 시작_시간 = new Date();

    function setTime() {
      const 현재_시간 = new Date();
      const 흐른_시간 = new Date(현재_시간 - 시작_시간);
      const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
      const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
      const timeH2 = document.querySelector("#timer");
      timeH2.innerText = `${분}:${초}`;
    }
    timer = setInterval(setTime, 1000);
  };

  startTimer();
  window.addEventListener("click", handleKeyclick);
}

appStart();
