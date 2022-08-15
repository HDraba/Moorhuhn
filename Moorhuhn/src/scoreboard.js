import { currentScoreUserName } from '../main';

export const userNameInput = document.getElementById('user-name-input');
const userNameForm = document.getElementById('user-name-form');

const defaultInputPrompt = 'Enter a name please...';

export const getScore = () => {
  if (currentScoreUserName.userName === '') {
    return;
  } else {
    if (
      !currentScoreUserName.userName &&
      currentScoreUserName.userName !== defaultInputPrompt
    ) {
      score.textContent = 'Current Dummy: ' + currentScoreUserName.currentScore;
    } else if (
      currentScoreUserName.userName &&
      currentScoreUserName.userName !== defaultInputPrompt
    ) {
      score.textContent =
        currentScoreUserName.userName +
        ': ' +
        currentScoreUserName.currentScore;
    }
  }
};

userNameInput.addEventListener('click', () => {
  userNameInput.value = '';
});

userNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  currentScoreUserName.userName = userNameInput.value;
  getScore();
  userNameInput.value = '';
});
