let userInput = 0;
let machineInput = 0;
let rps = ["rock", "paper", "scissors"];
function getMachineInput() {
  return Math.floor(Math.random() * 3);
}
function play(x) {
  userInput = x;
  machineInput = getMachineInput();
  // 0 - rock 1- paper 2- scissors
  if (userInput == machineInput) {
    document.getElementById(
      "result"
    ).innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: draw</p>`;
  } else if (userInput == 0 && machineInput == 2) {
    document.getElementById("result").innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: User victory</p>`;
  } else if (userInput == 1 && machineInput == 0) {
    document.getElementById("result").innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: User victory</p>`;
  } else if (userInput == 2 && machineInput == 1) {
    document.getElementById("result").innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: User victory</p>`;
  } else {
    document.getElementById("result").innerHTML = `<p>Computer chose ${rps[machineInput]}</p><p>User chose ${rps[userInput]}</p><p>Final result: Computer victory</p>`;
  }
}
