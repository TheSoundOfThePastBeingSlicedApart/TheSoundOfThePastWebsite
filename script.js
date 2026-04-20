function playAww() {
  const audio = document.getElementById('awwSound');
  const img = document.querySelector('.index-grid img');
  audio.play();
  if (img) {
    img.style.opacity = '0';
  }
}
