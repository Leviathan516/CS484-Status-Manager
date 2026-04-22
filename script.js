// Task 1: Console verification
console.log("Status Manager Started");

// Global variable for timer
let intervalId = null;

// Task 3: Change title on load
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "DOM Project: Ready!";

// Task 4: Add attribute to toggle button
const toggleButton = document.getElementById("toggle-button");
toggleButton.setAttribute("data-action", "status-toggle");

// Select elements used multiple times
const statusOutput = document.getElementById("status-output");
const controlPanel = document.getElementById("control-panel");
const timerButton = document.getElementById("timer-button");

// Task 8: Create timestamp
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = " " + new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

// Task 5 + 6 + 7: Toggle function
function toggleStatus(e) {
  e.preventDefault(); // Task 6

  statusOutput.classList.toggle("hidden");

  // Task 7: Change background color
  if (!statusOutput.classList.contains("hidden")) {
    mainTitle.style.backgroundColor = "yellow";

    // Task 8: Add timestamp
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

// Add event listener
toggleButton.addEventListener("click", toggleStatus);

// Task 9: Highlight list items
function highlightListItems() {
  const items = document.querySelectorAll("#item-list li");

  items.forEach(item => {
    item.style.color = "blue";
  });
}

// Run on page load
highlightListItems();

// Task 10: Flashing timer
function startFlashing() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      controlPanel.classList.toggle("hidden");
    }, 500);
  }
}

function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null;
  controlPanel.classList.remove("hidden"); // ensure visible after stopping
}

// Event listeners for timer
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
