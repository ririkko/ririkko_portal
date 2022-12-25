const neon = document.getElementById('neon');
const textInput = document.getElementById('textInput');
const button = document.getElementById('button');
const colorInput = document.getElementById('colorInput');
const colorButton = document.getElementById('colorButton');
const fontInput = document.getElementById('fontInput');
const fontButton = document.getElementById('fontButton');
const sizeInput = document.getElementById('sizeInput');
const sizeButton = document.getElementById('sizeButton');
const animationColorInput = document.getElementById('animationColorInput');
const animationColorButton = document.getElementById('animationColorButton');
const animationDurationInput = document.getElementById('animationDurationInput');
const animationDurationButton = document.getElementById('animationDurationButton');

button.addEventListener('click', () => {
  neon.innerHTML = textInput.value.replace(/\n/g, '<br>');
});

colorButton.addEventListener('click', () => {
  neon.style.color = colorInput.value;
  neon.style.textShadow = `0 0 10px ${colorInput.value}, 0 0 20px ${colorInput.value}, 0 0 30px ${colorInput.value}, 0 0 40px ${colorInput.value}, 0 0 50px ${colorInput.value}, 0 0 60px ${colorInput.value}, 0 0 70px ${colorInput.value}`;
  neon.style.animation = `neon 2s ease-in-out infinite alternate`;
});

fontButton.addEventListener('click', () => {
  neon.style.fontFamily = fontInput.value;
});

sizeButton.addEventListener('click', () => {
  neon.style.fontSize = `${sizeInput.value}px`;
  neon.style.lineHeight = `${sizeInput.value * 1.5}px`;
});

sizeInput.addEventListener('input', () => {
  neon.style.fontSize = `${sizeInput.value}px`;
  neon.style.lineHeight = `${sizeInput.value * 1.5}px`;
});

animationColorButton.addEventListener('click', () => {
  neon.style.animation = `neon 1s ease-in-out infinite alternate`;
  neon.style.textShadow = `0 0 5px ${animationColorInput.value}, 0 0 10px ${animationColorInput.value}, 0 0 15px ${animationColorInput.value}, 0 0 20px ${animationColorInput.value}, 0 0 25px ${animationColorInput.value}, 0 0 30px ${animationColorInput.value}, 0 0 35px ${animationColorInput.value}`;
});

animationDurationButton.addEventListener('click', () => {
  neon.style.animation = `neon ${animationDurationInput.value}s ease-in-out infinite alternate`;
});
