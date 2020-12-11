let expectedAnswer = 0;

function onClickVVDQ() {
  
  let divQ = document.getElementById('vvdQ')

  let a = 180

  question = "What is the angle between Virgil Van Dijk's legs while he is blocking the shot in the picture above?";
  expectedAnswer = a;

  divQ.innerHTML = question;
}

function onClickVVDA() {

  let vvdAnswerRaw = document.forms['vvd-question']['vvd-answer'].value;

  let vvdAnswer = parseInt(vvdAnswerRaw);

  if (vvdAnswer === expectedAnswer) {
    alert('Congratulations! You have understood how flawed FIFA is as a competent football simulation video game')
  } else {
    alert('Wrong! You do not understand how flawed FIFA is as a competent football simulation video game')
  }
}