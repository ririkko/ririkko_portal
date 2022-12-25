const neon = document.getElementById('neon');
const textInput = document.getElementById('textInput');
const button = document.getElementById('button');
const colorInput = document.getElementById('colorInput');
const colorButton = document.getElementById('colorButton');

button.addEventListener('click', () => {
  neon.textContent = textInput.value;
});

colorButton.addEventListener('click', () => {
  neon.style.color = colorInput.value;
  neon.style.textShadow = `0 0 10px ${colorInput.value}, 0 0 20px ${colorInput.value}, 0 0 30px ${colorInput.value}, 0 0 40px ${colorInput.value}, 0 0 50px ${colorInput.value}, 0 0 60px ${colorInput.value}, 0 0 70px ${colorInput.value}`;
});
