function playSound(audioId, button) {
  const audio = document.getElementById(audioId);
  const img = button.querySelector('img');

  if (audio) {
    audio.play();
  }

  if (img) {
    img.style.opacity = '0';
  }
}
