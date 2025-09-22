// -----------------
// Part 2: Functions
// -----------------

// Example function with parameters & return value
function calculateArea(length, width) {
  let area = length * width; // local scope
  document.getElementById("areaResult").textContent =
    `The area of ${length}x${width} is ${area}`;
  return area; // return value
}

// Global variable for demo
let globalCounter = 0;

// Reusable function
function updateCounter() {
  globalCounter++;
  console.log("Global counter is now:", globalCounter);
}

// -------------------------
// Part 3: JS + CSS Combined
// -------------------------

// Animate box on button click
document.getElementById("triggerBox").addEventListener("click", function() {
  const box = document.getElementById("jsBox");
  box.classList.toggle("animate");
  updateCounter(); // use function
});

// Modal logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
