// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const filedSet = document.querySelectorAll('fieldset');
let elInputUsername = document.querySelector('#username');
let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');
let elPwMessage = document.querySelector('#password');
let elPwRetype = document.querySelector('#password-retype');
let elMissMatch = document.querySelector('.mismatch-message');

elFailureMessage.classList.remove('hide');

//사용자가 아이디를 입력할 때
elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    //이 아이디의 길이가 4와 같거나 길면 성공
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
  } else {
    //아이디의 길이가 4보다 짧으면 실패
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
}

elPwRetype.onkeyup = function () {
  if (isMatch(elPwMessage.value, elPwRetype.value)) {
    console.log('값이 일치')
    elMissMatch.classList.add('hide');
  } else {
    console.log('값이 일치하지 않아');
    elMissMatch.classList.remove('hide');
  }
}




function isMoreThan4Length(value) {
  // TODO : 이 함수를 완성하세요.
  return value.length >= 4;
}

function isMatch(password1, password2) {
  return password1 === password2;
}
