import { currentScore, userName } from "../main";

const userNameInput = document.getElementById('user-name-input');

const defaultInputPrompt = 'Enter a name please...';

export const getScore = () => {
  if (userName === '') {
    return;
  } else {
    if (!userName && userName !== defaultInputPrompt) {
      score.textContent = 'Current Dummy: ' + currentScore;
    } else if (userName && userName !== defaultInputPrompt) {
      score.textContent = userName + ': ' + currentScore;
    }
  }
};

userNameInput.addEventListener('click', () => {
  userNameInput.value = '';
});

userNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userName = userNameInput.value;
  getScore();
  userNameInput.value = '';
});
