// import { getRandomCoordinates } from '../util/randomCoords';
// import {
//   currentScoreUserName,
//   arenaB,
//   arenaR,
//   arenaX,
//   arenaY,
//   scoreDiv,
// } from '../main';
// import { getScore, userNameInput } from './scoreboard';

// let chickenCounter = 0;

// function randomTime() {
//   return Math.random() * 2000 + 1200;
// }

// const movingChicken = (targetChick) => {
//   const xCoords = getRandomCoordinates(arenaX, arenaR) + 'px';
//   const yCoords = getRandomCoordinates(arenaY, arenaB) + 'px';
//   targetChick.style = `top: ${yCoords}; left: ${xCoords}; transition: ${randomTime()};`;
  
//   const timeOut = setTimeout(() => {
//     movingChicken();
//   }, randomTime());
// };

// const createNewChicken = () => {
//   const newChick = document.createElement('img');
//   newChick.setAttribute(
//     'src',
//     'https://cdn.imgbin.com/10/3/20/imgbin-dead-man-s-hand-moorhuhn-the-settlers-7-paths-to-a-kingdom-computer-icons-xiii-others-54JUqkV2eLFasFMnRnP9rSDi1.jpg'
//   );
//   newChick.style.left = getRandomCoordinates(arenaX, arenaR) + 'px';
//   newChick.style.top = getRandomCoordinates(arenaY, arenaB) + 'px';
//   console.log("I'm here");
//   newChick.classList.add('chicken');
//   insertChickenArea.appendChild(newChick);

//   // let blinkyInterval = setInterval(function () {
//   // movingChicken(newChick);
//   // }, randomTime());
//   // newChick.addEventListener('click', () => {
//   // clearInterval(blinkyInterval);
//   // });

//   /*for (let i=0; i<50; i++)   {
//     let timeOut = setTimeout(() => {
//         movingChicken(newChick);
//         console.log('Hey');
//       }, randomTime());
//   }
//   newChick.addEventListener('click', () => {
//     clearTimeout(timeOut);
//   });*/
// };

// const clickChickenHandler = (chick) => {
//   insertChickenArea.removeChild(chick);
//   currentScoreUserName.currentScore++;
//   getScore();
//   chickenCounter--;
//   if (chickenCounter === 0) {
//     const bdDiv = document.createElement('div');
//     bdDiv.classList.toggle('backdrop');

//     const bdDivH = document.createElement('h2');
//     bdDivH.textContent = `Game won, you've shot ${currentScoreUserName.currentScore} chicken`;

//     const bdDivBtn = document.createElement('button');
//     bdDivBtn.textContent = 'OK';
//     bdDivBtn.addEventListener('click', () => {
//       bdDiv.classList.toggle('backdrop');
//       document.body.removeChild(bdDiv);
//       console.log(chickenCounter);
//       const newScoreEntry = document.createElement('p');
//       if (currentScoreUserName.userName === '') {
//         currentScoreUserName.userName = 'DUMMY';
//         newScoreEntry.textContent = `${currentScoreUserName.userName}: ${currentScoreUserName.currentScore}`;
//       } else {
//         newScoreEntry.textContent = `${currentScoreUserName.userName}: ${currentScoreUserName.currentScore}`;
//       }
//       scoreDiv.appendChild(newScoreEntry);
//       currentScoreUserName.userName = userNameInput.value;
//       score.innerHTML = '';
//     });

//     document.body.appendChild(bdDiv);
//     bdDiv.appendChild(bdDivH);
//     bdDiv.appendChild(bdDivBtn);
//   }
// };

// export const initChicken = (amount) => {
//   chickenCounter = amount;
//   for (let i = 1; i <= amount; i++) {
//     createNewChicken();
//   }

//   const allChicken = document.querySelectorAll('.chicken');
//   allChicken.forEach((chick) => {
//     chick.addEventListener('click', () => {
//       clickChickenHandler(chick);
//       // clearInterval(blinkyInterval)
//     });
//   });
// };
