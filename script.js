function playSound6() {
  const audio = document.getElementById(`sound6`);
  const img = document.querySelector('.index-grid img');
  audio.play();
  if (img) {
    img.style.opacity = '0';
  }
}
