let target = document.querySelector("#dm");

function randomString() {
  let stringArr = [
    "Learn To Web",
    "Learn To Server",
    "Learn To iOS",
    "Learn To Android",
    "Learn To AI",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());
//커서깜빡임
function blnk() {
  target.classList.toggle("active");
}

setInterval(blnk, 500);
