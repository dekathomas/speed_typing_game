// Declare the variable
let timeText = document.querySelector('.time');
let scoreText = document.querySelector('.score');
let text = document.querySelector('.text');
let message = document.querySelector('.message');
let score = 0;
let currentTime = 5;
let time = currentTime;
let isPlaying = true;
let status = true;

const answerInput = document.querySelector('.answer-input');
const answer = document.querySelector('.answer');
const pressed = [];

// Variable for sidemenu setting
// const sideMenu = document.querySelector('.side-menu');
// const sideBar = document.querySelector('.side-bar');
// const childs = [...sideBar.querySelectorAll('ul li')];

// childs.forEach(child => {
// 	child.addEventListener('click', (e) => {
// 		e.preventDefault();

// 		time = child.dataset.time;
// 		init();
// 		// status = false;
// 		// openSideBar;
// 	});
// });

const words = [
	"abandoned", "absurd", "alive", "ambiguous", "annoying", "ancient", "anxious", "ashamed", "awful", "beneficial",
	"bizzare", "bewildered", "boundless", "busy", "calm", "charming", "clumsy", "colossal", "comfortable", "curved",
	"defeated", "devilish", "digusting", "doubtful", "dynamic", "embarrassed", "entertaining", "exhausted", "fair",
	"fearless", "fluffy", "frightening", "graceful", "hideous", "holistic", "hollow", "innocent", "itchy", "jealous",
	"regular", "rotten", "silly", "solid", "sticky", "stingy", "uninterested", "windy", "wet", "yummy", "terrifying"
];

// Make the function
function init() {
	document.querySelector('.second').innerHTML = currentTime;
	timeText.innerHTML = time;
	isPlaying = true;

	showWord();

	submit;

	setInterval(countDown, 1000);
}

function showWord() {
	const rand = Math.round(Math.random() * (words.length - 0) + 0);
	text.innerHTML = words[rand];
}

function submit(e) {
	e.preventDefault();
	const ans = answerInput.value;

	if(match(ans)) {
		time = currentTime;
		showWord();
		score++;
		isPlaying = true;
	} else {
		score--;
	}

	scoreText.innerHTML = score;
	timeText.innerHTML = time;

	this.reset();
}

function match(ans) {
	return ans === text.innerHTML ? true : false;
}

function countDown() {
	if(time > 0) {
		time--;
		timeText.innerHTML = time;
		isPlaying = false;

		if(time == 0) {
			checkStatus();
		}
	}

}

function checkStatus() {
	if(!isPlaying) {
		text.innerHTML = 'GAME OVER !!!';
		text.style.color = 'red';
		text.style.textShadow = '0 5px 0 #000';
		answerInput.setAttribute('disabled', 'on');
		answerInput.classList.add('disable');
	} else {
		text.style.color = 'white';
		text.style.textShadow = 'none';
		answerInput.setAttribute('disabled', 'off');
		answerInput.classList.remove('disable');
	}
}

// function openSideBar() {
// 	if(status) {
// 		sideMenu.style.transform = 'translate(-70px, -50%)';
// 		sideBar.style.transform = 'translate(-70px, -50%)';
// 		status = false;
// 	} else {
// 		sideMenu.style.transform = 'translate(0, -50%)';
// 		sideBar.style.transform = 'translate(0, -50%)';
// 		status = true;
// 	}
// }

// Add the event
window.addEventListener('load', init);
answer.addEventListener('submit', submit);

// sideMenu.addEventListener('click', openSideBar);