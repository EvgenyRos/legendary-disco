let parallaxImage = document.getElementById('parallaxImage');

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', (event) => {
    const acceleration = event.accelerationIncludingGravity;

    if (acceleration.x && acceleration.y) {
      // Рух на основі акселерометра
      let moveX = -acceleration.x * 10; // Налаштуйте чутливість
      let moveY = -acceleration.y * 10;

      // Оновлюємо позицію зображення
      parallaxImage.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    }
  });
} else {
  console.log('DeviceMotionEvent не підтримується на цьому пристрої.');
}
