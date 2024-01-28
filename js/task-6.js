function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.body.style.backgroundColor = '#F6F6FE';
document.addEventListener('DOMContentLoaded', function() {
      const createButton = document.querySelector('[data-create]');
      const destroyButton = document.querySelector('[data-destroy]');

      createButton.addEventListener('click', createBoxes);
      destroyButton.addEventListener('click', destroyBoxes);
    });

    function createBoxes() {
      const input = document.querySelector('input');
      const boxes= document.getElementById('boxes');
      boxes.innerHTML = '';
      const boxCount = parseInt(input.value);
      if (isNaN(boxCount) || boxCount < 1 || boxCount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
      }
      let size = 30;
      for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.appendChild(box);
        size += 10;
      }
      input.value = '';
    }

    function destroyBoxes() {
      const boxes = document.getElementById('boxes');
      
      boxes.innerHTML = '';
    }