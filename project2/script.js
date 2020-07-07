// Globals
const container = document.querySelector(".container");
const total = document.querySelector("#total");
const count = document.querySelector("#count");
const seats = document.querySelectorAll(".seat");
const movie = document.querySelector("#movie");
const reset = document.querySelector(".reset");
// Retrieve localStorage Data
(() => {
  storedSeatsIndex = JSON.parse(localStorage.getItem("sSeatsIndex"));
  if (storedSeatsIndex != null) {
    storedSeatsIndex.forEach((i) => {
      seats[i].classList.add("selected");
    });
  }
  StoredMovieIndex = localStorage.getItem("movieIndex");
  movie.value = StoredMovieIndex;
})();
// Reset layout
function resetLayout() {
  localStorage.clear();
  location.reload();
  movie.value = '1';
}
// Update Select Count
function updateSCount() {
  sSeats = document.querySelectorAll(".row .seat.selected");
  // Local Storage saving
  localStorage.setItem(
    "sSeatsIndex",
    JSON.stringify([...sSeats].map((i) => [...seats].indexOf(i)))
  );
  count.textContent = `${sSeats.length}`;
  total.textContent = `${sSeats.length * +movie.value}`;
}
// Movie Select Event Listener
movie.addEventListener("click", (e) => {
  localStorage.setItem("movieIndex", e.target.value);
  updateSCount();
});
// Seat Select Event Listener
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSCount();
  }
});
// Reset Event Listener
reset.addEventListener("click", (e) => {
  resetLayout();
});
updateSCount();
