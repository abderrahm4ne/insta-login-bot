document.addEventListener('DOMContentLoaded', () => {
  let seconds = document.getElementById("seconds");
  let startButton = document.getElementById("startBot");
  let stopButton = document.getElementById("stopBot");
  let timerValue = document.getElementById("refreshInterval");
  let botButton = document.getElementById("startScript");
  let status = document.getElementById("status");

  let time;
  let countdown;

  startButton.addEventListener('click', () => {
      time = parseInt(timerValue.value, 10);
      if (isNaN(time) || time < 1) {
          alert("Please enter a valid number greater than 0.");
          return;
      }
      startTimerCountDown(time);
      status.textContent = "Bot started...";
  });

  stopButton.addEventListener('click', () => {
      clearInterval(countdown);
      seconds.textContent = "00";
      status.textContent = "Bot stopped.";
  });

  botButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ['content.js']
          });
          status.textContent = "Script executed in the active tab.";
      });
  });

  function startTimerCountDown(timeInitial) {
      clearInterval(countdown);
      time = timeInitial;
      countdown = setInterval(() => {
          if (time > 0) {
              time--;
              updater();
          } else {
              alert("Time is up!");
              clearInterval(countdown);
          }
      }, 1000);
  }

  function updater() {
      seconds.textContent = time < 10 ? `0${time}` : time;
  }
});
