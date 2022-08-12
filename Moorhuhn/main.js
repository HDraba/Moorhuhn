import './style.css';
import { getScore } from "./src/scoreboard";
import { initChicken } from "./src/chicken";

const titleh1 = document.getElementById('title');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset');
const score = document.getElementById('score');
const userNameForm = document.getElementById('user-name-form');
// export const userNameInput = document.getElementById('user-name-input');
const arena = document.getElementById('grass');
const grassPosition = arena.getBoundingClientRect();
const arenaX = grassPosition.left + 20;
const arenaY = grassPosition.top + 20;
const arenaR = grassPosition.right - 120;
const arenaB = grassPosition.bottom - 120;
const insertChickenArea = document.getElementById('insertChickenArea');
const scoreDiv = document.getElementById('score-div');

// console.log(`X: ${arenaX}, Y: ${arenaY}, Right: ${arenaR}, Bottom: ${arenaB}`);

export let currentScore = 0;
export let userName = userNameInput.value;

let isHideBtnVisible = true;
let isStartBtnVisible = true;
const hideHeaderAndBtn = () => {
  if (isHideBtnVisible) {
    titleh1.style.display = 'none';
    isHideBtnVisible = false;
  }
  if (isStartBtnVisible) {
    startBtn.style.display = 'none';
    isStartBtnVisible = false;
  }
};

// randomCoords

// chicken

// chicken end 

const appInit = (amount) => {
  // reset();
  hideHeaderAndBtn();
  initChicken(amount)
};

// scoreboard

// -------------------------

const reset = () => {
  titleh1.style.display = 'flex';
  startBtn.style.display = 'block';
  isHideBtnVisible = true;
  isStartBtnVisible = true;
  currentScore = 0;
  getScore();
  insertChickenArea.innerHTML = '';
};

resetBtn.addEventListener('click', reset);
startBtn.addEventListener('click', () => {
  appInit(2);
});

// notes
/*
Gewonnen/Runde Vorbei - check 
mehrere scores hintereinander - check

highscore 
zeitlich begrenzt, random amount zwischen 500 und 3000 ms
movement
verschiedene difficulties
VLLT: verschiedene Hühner 
*/
