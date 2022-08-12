import { getRandomCoordinates } from "../util/randomCoords";
import { currentScore, userName } from "../main";

let chickenCounter = 0;

const createNewChicken = () => {
  const newChick = document.createElement('img');
  newChick.setAttribute(
    'src',
    'https://cdn.imgbin.com/10/3/20/imgbin-dead-man-s-hand-moorhuhn-the-settlers-7-paths-to-a-kingdom-computer-icons-xiii-others-54JUqkV2eLFasFMnRnP9rSDi1.jpg'
  );
  newChick.style.maxWidth = '100px';
  newChick.style.maxHeight = '100px';
  newChick.style.left = getRandomCoordinates(arenaX, arenaR) + 'px';
  newChick.style.top = getRandomCoordinates(arenaY, arenaB) + 'px';
  newChick.style.position = 'absolute';
  newChick.classList.add('chicken');
  insertChickenArea.appendChild(newChick);
};

const clickChickenHandler = (chick) => {
  insertChickenArea.removeChild(chick);
  currentScore++;
  getScore();
  chickenCounter--;
  if (chickenCounter === 0) {
    console.log(chickenCounter);
    const bdDiv = document.createElement('div');
    bdDiv.classList.toggle('backdrop');

    const bdDivH = document.createElement('h2');
    bdDivH.textContent = `Game won, you've shot ${currentScore} chicken`;

    const bdDivBtn = document.createElement('button');
    bdDivBtn.textContent = 'OK';
    bdDivBtn.addEventListener('click', () => {
      bdDiv.classList.toggle('backdrop');
      document.body.removeChild(bdDiv);

      const newScoreEntry = document.createElement('p');
      if (userName === '') {
        console.log('1');
        userName = 'DUMMY';
        newScoreEntry.textContent = `${userName}: ${currentScore}`;
      } else {
        console.log('2');
        newScoreEntry.textContent = `${userName}: ${currentScore}`;
      }
      scoreDiv.appendChild(newScoreEntry);
      userName = userNameInput.value;
      score.innerHTML = '';
    });

    document.body.appendChild(bdDiv);
    bdDiv.appendChild(bdDivH);
    bdDiv.appendChild(bdDivBtn);
  }
};

export const initChicken = (amount) => {
  chickenCounter = amount;
  for (let i = 1; i <= amount; i++) {
    createNewChicken();
  }

  const allChicken = document.querySelectorAll('.chicken');
  allChicken.forEach((chick) => {
    chick.addEventListener('click', () => {
      clickChickenHandler(chick);
    });
  });
};
