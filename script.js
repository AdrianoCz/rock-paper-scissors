let userInput = 0;
let machineInput = 0;
let rps = ["rock", "paper", "scissors"];
const body = document.querySelector("body");
const ababa = document.querySelectorAll("button");
const result = document.createElement("div");

const compChoice = document.createElement("p");
const userChoice = document.createElement("p");
const finalResult = document.createElement("p");

result.appendChild(compChoice);
result.appendChild(userChoice);
result.appendChild(finalResult);

ababa.forEach((element) => {
  element.addEventListener("click", play);
});

function getMachineInput() {
  return Math.floor(Math.random() * 3);
}

function play(e) {
  result.remove();
  let userInput = Number(e.target.value);
  machineInput = getMachineInput();

  // 0 - rock 1- paper 2- scissors
  if (userInput == machineInput) {
    compChoice.textContent = `Computer chose ${rps[machineInput]}`;
    userChoice.textContent = `User chose ${rps[userInput]}`;
    finalResult.textContent = `Final result: draw`;

    body.appendChild(result);
  } else if (userInput == 0 && machineInput == 2) {
    document.getElementById(
      "result"
    ).innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: User victory</p>`;
  } else if (userInput == 1 && machineInput == 0) {
    document.getElementById(
      "result"
    ).innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: User victory</p>`;
  } else if (userInput == 2 && machineInput == 1) {
    document.getElementById(
      "result"
    ).innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: User victory</p>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: Computer victory</p>`;
  }
}
