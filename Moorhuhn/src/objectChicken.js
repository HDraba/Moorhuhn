import { getRandomCoordinates } from '../util/randomCoords';
import {
  currentScoreUserName,
  arenaB,
  arenaR,
  arenaX,
  arenaY,
  scoreDiv,
} from '../main';
import { getScore, userNameInput } from './scoreboard';

let chickenCounter = 0;

class Chicken {
  constructor(chicken) {
    this.chicken = chicken;
  }
  timer() {
    function randomTime() {
      return Math.random() * 2000 + 1200;
    }
  }
  moveChicken() {
    const xCoords = getRandomCoordinates(arenaX, arenaR) + 'px';
    const yCoords = getRandomCoordinates(arenaY, arenaB) + 'px';
    this.chicken.style = `top: ${yCoords}; left: ${xCoords}; transition: ${randomTime()};`;

    const timeOut = setTimeout(() => {
      movingChicken();
    }, this.timer());
  }

  createChicken() {
    const chickenEl = document.createElement('img');
    chickenEl.setAttribute(
      'src',
      'https://cdn.imgbin.com/10/3/20/imgbin-dead-man-s-hand-moorhuhn-the-settlers-7-paths-to-a-kingdom-computer-icons-xiii-others-54JUqkV2eLFasFMnRnP9rSDi1.jpg'
    );
    chickenEl.style.left = getRandomCoordinates(arenaX, arenaR) + 'px';
    chickenEl.style.top = getRandomCoordinates(arenaY, arenaB) + 'px';
    chickenEl.classList.add('chicken');
    insertChickenArea.appendChild(chickenEl);
    return chickenEl;
  }

  clickChicken(chickenElement) {
    console.log('click');
    console.log(this.chicken);
    insertChickenArea.removeChild(chickenElement);
    currentScoreUserName.currentScore++;
    getScore();
    chickenCounter--;
    if (chickenCounter === 0) {
      const bdDiv = document.createElement('div');
      bdDiv.classList.toggle('backdrop');

      const bdDivH = document.createElement('h2');
      bdDivH.textContent = `Game won, you've shot ${currentScoreUserName.currentScore} chicken`;

      const bdDivBtn = document.createElement('button');
      bdDivBtn.textContent = 'OK';
      bdDivBtn.addEventListener('click', () => {
        bdDiv.classList.toggle('backdrop');
        document.body.removeChild(bdDiv);
        console.log(chickenCounter);
        const newScoreEntry = document.createElement('p');
        if (currentScoreUserName.userName === '') {
          currentScoreUserName.userName = 'DUMMY';
          newScoreEntry.textContent = `${currentScoreUserName.userName}: ${currentScoreUserName.currentScore}`;
        } else {
          newScoreEntry.textContent = `${currentScoreUserName.userName}: ${currentScoreUserName.currentScore}`;
        }
        scoreDiv.appendChild(newScoreEntry);
        currentScoreUserName.userName = userNameInput.value;
        score.innerHTML = '';
      });

      document.body.appendChild(bdDiv);
      bdDiv.appendChild(bdDivH);
      bdDiv.appendChild(bdDivBtn);
    }
  }
}

export const initChicken = (amount) => {
  chickenCounter = amount;
  let chickens = [];
  for (let i = 1; i <= amount; i++) {
    let newChicken = new Chicken('newInstanceOfChicken');
    const chickenElement = newChicken.createChicken();
    chickens.push(newChicken);
    console.log(chickenElement);
    chickenElement.addEventListener('click', () => {
      newChicken.clickChicken(chickenElement);
    });
  }
};

// IDEE: beim Erstellen eines Objektes der Klasse Chicken, den Eventlistener hinzufügen als Methode
// genauso wie dazugehöriges DOM Element erstellen
