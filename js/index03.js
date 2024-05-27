// document.addEventListener("DOMContentLoaded", () => {
//   const board = document.querySelector(".board-block");
//   const timerElement = document.getElementById("timer");
//   const words = [
//     "APPLE",
//     "BANANA",
//     "CHERRY",
//     "GRAPES",
//     "GUAVA",
//     "KIWI",
//     "LEMON",
//     "MANGO",
//     "ORANGE",
//     "STRAWBERRY"
//   ];
//   let startTime;
//   let selectedCells = [];
//   let selectedWord = "";

//   // 타이머 기능
//   function startTimer() {
//     startTime = Date.now();
//     updateTimer();
//   }

//   function updateTimer() {
//     const currentTime = Date.now();
//     const elapsedTime = new Date(currentTime - startTime);
//     const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, "0");
//     const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, "0");
//     timerElement.textContent = `${minutes}:${seconds}`;
//     requestAnimationFrame(updateTimer);
//   }

//   // 선택된 단어가 단어 목록에 있는지 확인
//   function checkWord() {
//     if (words.includes(selectedWord)) {
//       alert(`찾았다: ${selectedWord}`);
//       selectedCells.forEach((cell) => cell.classList.add("found"));
//       words.splice(words.indexOf(selectedWord), 1);
//       selectedWord = "";
//       selectedCells = [];
//     }
//   }

//   // 셀 클릭 핸들러
//   board.addEventListener("click", (event) => {
//     if (event.target.classList.contains("board-column")) {
//       const cell = event.target;
//       cell.classList.toggle("selected");
//       if (cell.classList.contains("selected")) {
//         selectedCells.push(cell);
//         selectedWord += cell.dataset.key;
//       } else {
//         selectedCells = selectedCells.filter(
//           (selectedCell) => selectedCell !== cell
//         );
//         selectedWord = selectedWord.replace(cell.dataset.key, "");
//       }

//       if (selectedWord.length > 0) {
//         checkWord();
//       }
//     }
//   });

//   // 타이머 초기화
//   startTimer();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const answers = [
//     "APPLE",
//     "BANANA",
//     "CHERRY",
//     "GRAPES",
//     "GUAVA",
//     "KIWI",
//     "LEMON",
//     "MANGO",
//     "ORANGE",
//     "STRAWBERRY"
//   ];
//   const clickedWords = new Set(); // 사용자가 클릭한 단어를 저장하기 위한 Set

//   const boardColumns = document.querySelectorAll(".board-column");

//   boardColumns.forEach((column) => {
//     column.addEventListener("click", function () {
//       const clickedKey = column.getAttribute("data-key"); // 클릭된 칸의 data-key 속성값을 가져옴
//       const clickedIndex = column.getAttribute("data-index"); // 클릭된 칸의 data-index 속성값을 가져옴
//       const word = getWord(clickedIndex); // 클릭된 칸을 기준으로 단어를 가져옴

//       if (word && !clickedWords.has(word)) {
//         // 클릭된 단어가 정답이고, 이미 클릭한 단어 목록에 없는 경우
//         clickedWords.add(word); // 클릭한 단어를 목록에 추가
//         column.style.backgroundColor = "green"; // 클릭한 단어를 표시하기 위해 배경색을 변경

//         if (answers.includes(word)) {
//           // 클릭한 단어가 정답 목록에 있는 경우
//           console.log("Correct!"); // 정답 메시지를 출력하거나 원하는 동작 수행
//         }
//       }
//     });
//   });

//   function getWord(index) {
//     // 클릭된 칸을 기준으로 해당 단어를 찾아 반환하는 함수
//     const rowIndex = Math.floor(index / 12); // 행 인덱스 계산
//     const colIndex = index % 12; // 열 인덱스 계산

//     const row = document.querySelector(`.row-${rowIndex}`); // 해당 행의 열들을 가져옴
//     const columns = row.querySelectorAll(".board-column");

//     let word = "";
//     columns.forEach((column, i) => {
//       if (i >= colIndex && column.getAttribute("data-key") !== "") {
//         word += column.getAttribute("data-key"); // 클릭된 칸을 기준으로 오른쪽에 있는 비어있지 않은 칸들을 문자열에 추가
//       }
//     });

//     return word;
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const answers = [
    "APPLE",
    "BANANA",
    "CHERRY",
    "GRAPES",
    "GUAVA",
    "KIWI",
    "LEMON",
    "MANGO",
    "ORANGE",
    "STRAWBERRY"
  ];
  const clickedWords = new Set(); // 사용자가 클릭한 단어를 저장하기 위한 Set

  const boardColumns = document.querySelectorAll(".board-column");

  boardColumns.forEach((column) => {
    column.addEventListener("click", function () {
      const clickedKey = column.getAttribute("data-key"); // 클릭된 칸의 data-key 속성값을 가져옴
      const clickedIndex = column.getAttribute("data-index"); // 클릭된 칸의 data-index 속성값을 가져옴
      const word = getWord(clickedIndex); // 클릭된 칸을 기준으로 단어를 가져옴

      if (word && !clickedWords.has(word)) {
        // 클릭된 단어가 정답이고, 이미 클릭한 단어 목록에 없는 경우
        clickedWords.add(word); // 클릭한 단어를 목록에 추가
        column.style.backgroundColor = "green"; // 클릭한 단어를 표시하기 위해 배경색을 변경

        if (answers.includes(word)) {
          // 클릭한 단어가 정답 목록에 있는 경우
          window.alert("Correct!"); // 정답 알림창을 띄움
        }
      }
    });
  });

  function getWord(index) {
    // 클릭된 칸을 기준으로 해당 단어를 찾아 반환하는 함수
    const rowIndex = Math.floor(index / 12); // 행 인덱스 계산
    const colIndex = index % 12; // 열 인덱스 계산

    const row = document.querySelector(`.row-${rowIndex}`); // 해당 행의 열들을 가져옴
    const columns = row.querySelectorAll(".board-column");

    let word = "";
    columns.forEach((column, i) => {
      if (i >= colIndex && column.getAttribute("data-key") !== "") {
        word += column.getAttribute("data-key"); // 클릭된 칸을 기준으로 오른쪽에 있는 비어있지 않은 칸들을 문자열에 추가
      }
    });

    return word;
  }
});
