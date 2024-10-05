let timerElement = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');

// Get sub-activities checkboxes and labels for tasks
let activities = [
    { checkbox: document.getElementById('task1Activity1'), checkmark: document.getElementById('task1Activity1Checkmark') },
    { checkbox: document.getElementById('task1Activity2'), checkmark: document.getElementById('task1Activity2Checkmark') },
    { checkbox: document.getElementById('task1Activity3'), checkmark: document.getElementById('task1Activity3Checkmark') },
    { checkbox: document.getElementById('task1Activity4'), checkmark: document.getElementById('task1Activity4Checkmark') },
    { checkbox: document.getElementById('task2Activity1'), checkmark: document.getElementById('task2Activity1Checkmark') },
    { checkbox: document.getElementById('task2Activity2'), checkmark: document.getElementById('task2Activity2Checkmark') },
    { checkbox: document.getElementById('task2Activity3'), checkmark: document.getElementById('task2Activity3Checkmark') },
    { checkbox: document.getElementById('task2Activity4'), checkmark: document.getElementById('task2Activity4Checkmark') },
    { checkbox: document.getElementById('task2Activity5'), checkmark: document.getElementById('task2Activity5Checkmark') },
    { checkbox: document.getElementById('task2Activity6'), checkmark: document.getElementById('task2Activity6Checkmark') },
    { checkbox: document.getElementById('task2Activity7'), checkmark: document.getElementById('task2Activity7Checkmark') },
    { checkbox: document.getElementById('task2Activity8'), checkmark: document.getElementById('task2Activity8Checkmark') },
    { checkbox: document.getElementById('task3Activity1'), checkmark: document.getElementById('task3Activity1Checkmark') },
    { checkbox: document.getElementById('task3Activity2'), checkmark: document.getElementById('task3Activity2Checkmark') },
    { checkbox: document.getElementById('task3Activity3'), checkmark: document.getElementById('task3Activity3Checkmark') },
    { checkbox: document.getElementById('task3Activity4'), checkmark: document.getElementById('task3Activity4Checkmark') },
    { checkbox: document.getElementById('task3Activity5'), checkmark: document.getElementById('task3Activity5Checkmark') }
];

let countdown;
let elapsedTime = 0; // To track elapsed time

function startTimer(maxDuration, display) {
    let timer = 0, minutes, seconds;
    countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (++timer > maxDuration) {
            clearInterval(countdown);
            display.textContent = "Time's Up!";
            startBtn.disabled = false;
        } else {
            elapsedTime = timer; // Update elapsed time
        }
    }, 1000);
}

// Function to handle checking sub-activities and showing checkmarks
function handleCheck(checkbox, checkmark) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkmark.classList.add('completed'); // Show checkmark
        } else {
            checkmark.classList.remove('completed'); // Hide checkmark
        }
    });
}

// Initialize sub-activity checkbox listeners
activities.forEach(activity => {
    handleCheck(activity.checkbox, activity.checkmark);
});

startBtn.addEventListener('click', function () {
    let ninetyMinutes = 90 * 60; // 90 minutes in seconds
    startBtn.disabled = true;
    startTimer(ninetyMinutes, timerElement);
});
