// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable for Task 10
let intervalId = null;

// DOM references
const mainTitle     = document.querySelector("#main-title");
const toggleButton  = document.getElementById("toggle-button");
const statusOutput  = document.querySelector("#status-output");
const timerButton   = document.getElementById("timer-button");
const controlPanel  = document.getElementById("control-panel");
const itemList      = document.getElementById("item-list");
const timestampList = document.getElementById("timestamp-list");

/* ── Task 3: Update title on load ── */
mainTitle.innerHTML = "DOM Project: Ready!";

/* ── Task 4: Add data attribute ── */
toggleButton.setAttribute("data-action", "status-toggle");

/* ── Task 9: Highlight list items ── */
function highlightListItems() {
  const items = document.querySelectorAll("li");
  items.forEach(function (item) {
    item.style.color = "#00b4d8";
  });
}
highlightListItems();

/* ── Task 8: Create timestamp ── */
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = "Event logged at " + new Date().toLocaleTimeString();
  timestampList.appendChild(span);
}

/* ── Tasks 5, 6, 7, 8: Toggle function ── */
function toggleStatus(e) {
  // Task 6: prevent anchor jump
  e.preventDefault();

  // Task 5: toggle visibility
  statusOutput.classList.toggle("hidden");

  const isVisible = !statusOutput.classList.contains("hidden");

  // Task 7: title background + class for smooth transition
  if (isVisible) {
    mainTitle.style.backgroundColor = "yellow";
    mainTitle.classList.add("lit");
    toggleButton.querySelector(".btn-label").textContent = "Hide Status";
    // Task 8: append timestamp
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
    mainTitle.classList.remove("lit");
    toggleButton.querySelector(".btn-label").textContent = "Toggle Status";
  }
}

toggleButton.addEventListener("click", toggleStatus);

/* ── Task 10: Flashing timer ── */
function startFlashing() {
  if (intervalId !== null) return;
  timerButton.querySelector(".btn-label").textContent = "Dbl-click to Stop";
  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null;
  controlPanel.classList.remove("hidden");
  timerButton.querySelector(".btn-label").textContent = "Start Timer";
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
