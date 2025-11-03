// Simple click tracker
let clickCount = 0;
const trackButton = document.getElementById('trackButton');
const logDisplay = document.getElementById('logDisplay');

trackButton.addEventListener('click', () => {
  clickCount++;
  const timestamp = new Date().toLocaleString();
  const logEntry = `Click #${clickCount} at ${timestamp}`;
  console.log(logEntry);
  logDisplay.textContent = logEntry;
});


