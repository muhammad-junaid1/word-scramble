let msg = document.querySelector("#message"),
  input = document.querySelector("#guess"),
  play = false,
  randomVal;
  const SUBMIT = document.querySelector("#button"),
  ASKNAME = document.querySelector("#ask-name"),
  USERNAME = document.querySelector(".user-name"),
  HINT =  document.querySelector(".hint");
let words = [
  "java",
  "kotlin",
  "sass",
  "bootstrap",
  "python",
  "android",
  "ruby",
  "javascript",
  "c++",
  "html",
  "css",
  "swift",
  "matlab",
  "php",
];
function createWord() {
  randomVal = Math.floor(Math.random() * words.length);
  let randomWord = words[randomVal].split("");
  for (let a = randomWord.length - 1; a > 0; a--) {
    let temp = randomWord[a];
    let randomChar = Math.floor(Math.random() * (a + 1));
    randomWord[a] = randomWord[randomChar];
    randomWord[randomChar] = temp;
  }
  return randomWord.join("");
}
SUBMIT.addEventListener("click", playGame);
function playGame() {
    if(!(ASKNAME.value === "")) {
    USERNAME.innerHTML = `<i class = 'fas fa-user'></i> ${ASKNAME.value}`;
    } else {
        USERNAME.innerHTML = `<i class = 'fas fa-user'></i> Hi There`;
    }
  ASKNAME.style.display = "none";
  if (!play) {
    play = true;
    input.classList.toggle("hide");
    SUBMIT.textContent = "Guess";
    let scrambledWord = createWord();
    msg.style.display = "block";
    msg.innerHTML = `${scrambledWord}<span class = 'hint-icon'><i class = 'fas fa-info-circle'></i></span>`;
    input.focus();
  } else {
    let guess = input.value;
    if (guess === words[randomVal]) {
      msg.textContent = "Correct !";
      SUBMIT.textContent = "Next";
    } else {
      msg.textContent = "Wrong !";
      SUBMIT.textContent = "Try Again";
    }
    play = false;
    input.classList.toggle("hide");
    input.value = "";
  }

  document.querySelector(".hint-icon").addEventListener("click", showHint);
  function showHint() {
      HINT.innerHTML = `First Letter of Word is : ${words[randomVal][0].big()}`;
    HINT.style.display = "block";
    setTimeout("HINT.style.display = 'none'", 2000);
}
}