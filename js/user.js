// const btn = document.querySelector(".user-submit");

// function clickHandler() {
//   const nameInput = document.querySelector("#name-input");
//   const name = nameInput.value; // 입력된 이름의 앞뒤 공백을 제거한 후 가져옴

//   if (name !== "") {
//     window.location.href = "index.html";
//   } else {
//     return;
//   }
// }

// btn.addEventListener("click", clickHandler);

const btn = document.querySelector(".user-submit");

function clickHandler(event) {
  event.preventDefault(); // 폼 제출을 방지하여 페이지가 새로고침되지 않도록 함

  const nameInput = document.querySelector(".name-input");
  const name = nameInput.value.trim(); // 입력된 이름의 앞뒤 공백을 제거한 후 가져옴

  if (name !== "") {
    window.location.href = "./index.html";
  } else {
    // 입력된 이름이 없는 경우에 대한 처리 추가 가능
    alert("이름을 입력해주세요.");
  }
}

btn.addEventListener("click", clickHandler);
