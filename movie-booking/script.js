const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

populateUI();

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  console.log(selectedSeats);
  if (selectedSeats !== null && selectedSeats.length > 0)
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log('added');
        seat.classList.add('selected');
      }
    });
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

  if (selectedMovieIndex != null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
  if (selectedMoviePrice != null) {
    ticketPrice = selectedMoviePrice;
  }
}
function setMovieData(index, price) {
  localStorage.setItem('selectedMovieIndex', index);
  localStorage.setItem('selectedMoviePrice', price);
}
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, +e.target.value);
  updateSelectedCount();
});
function storeIndexOfSelected() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsIndex = [...selectedSeats].map(seat =>
    [...seats].indexOf(seat)
  );
  localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsIndex));
}
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    storeIndexOfSelected();
  }
  updateSelectedCount();
});
updateSelectedCount();
