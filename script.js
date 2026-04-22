// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// Task 3: Selecting and Changing Inner HTML
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// Task 4: Attribute Modification
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// Task 9: Looping and Applying Changes
function highlightListItems() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach(function (item) {
    item.style.color = "blue";
  });
}

highlightListItems();

/* ======================================= */
// Task 8: Dynamic Element Creation 
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = " Last updated: " + new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

/* ======================================= */
// Tasks 5, 6, 7 & 8: Toggle Functionality 
function toggleStatus(e) {
  // Task 6: Prevent the anchor from jumping/reloading the page
  e.preventDefault();

  // Task 5: Toggle the .hidden class on the status div
  statusOutput.classList.toggle("hidden");

  // Task 7: Update main title background based on visibility
  if (!statusOutput.classList.contains("hidden")) {
    // Status is now visible
    mainTitle.style.backgroundColor = "yellow";

    // Task 8: Append a timestamp each time the status becomes visible
    createTimestamp();
  } else {
    // Status is now hidden
    mainTitle.style.backgroundColor = "";
  }
}

toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// Task 10: Timed Animation
function startFlashing() {
  // Avoid stacking multiple intervals if clicked repeatedly
  if (intervalId !== null) return;
  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null;
  // Make sure the panel is visible after stopping
  controlPanel.classList.remove("hidden");
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
