document.addEventListener('DOMContentLoaded', function() {
    const blinkElement = document.querySelector('.blink');
    if (blinkElement) {
      blinkElement.addEventListener('click', function() {
        blinkElement.classList.toggle('no-blink');
      });
    }
  });