// show color name when clicked
const colorBoxes = document.querySelectorAll('.color-box');
const colorName = document.getElementById('color-name');
colorBoxes.forEach(box => {
  box.addEventListener('click', () => {
    colorName.textContent = `This is ${box.dataset.color}!`;
    colorName.style.color = box.style.backgroundColor;
  });
});

// number slider
let currentNum = 1;
const numDisplay = document.getElementById('current-number');
document.getElementById('next-num').addEventListener('click', () => {
  if (currentNum < 10) currentNum++;
  numDisplay.textContent = currentNum;
});
document.getElementById('prev-num').addEventListener('click', () => {
  if (currentNum > 1) currentNum--;
  numDisplay.textContent = currentNum;
});

// modal info window
const modal = document.getElementById('info-modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.shape, .animal-gallery img').forEach(item => {
  item.addEventListener('click', () => {
    const type = item.dataset.shape || item.dataset.animal;
    modalText.textContent = `This is a ${type}!`;
    modal.style.display = 'block';
  });
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; };

// go to top button
document.getElementById('topBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// fun greeting alert when page loads
window.addEventListener('load', () => {
  alert("👋 Welcome to Learning is Fun! Let's explore together!");
});
