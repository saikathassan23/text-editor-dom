const textField = document.getElementById('text-field');
const textBold = document.getElementById('text-bold');
const textItalic = document.getElementById('text-italic');
const textUnderline = document.getElementById('text-underline');
const alignLeft = document.getElementById('align-left');
const alignRight = document.getElementById('align-right');
const alignCenter = document.getElementById('align-center');
const alignJustify = document.getElementById('align-justify');
const fontSize = document.getElementById('number-input');
const textCapital = document.getElementById('text-capitalize');
const colorInput = document.getElementById('color-input');

textBold.addEventListener('click', function () {
  //   let textFieldValue = textField.value;
  textField.classList.toggle('font-bold');
});

textItalic.addEventListener('click', function () {
  //   let textFieldValue = textField.value;
  textField.classList.toggle('italic');
});

textUnderline.addEventListener('click', function () {
  //   let textFieldValue = textField.value;
  textField.classList.toggle('underline');
});
alignLeft.addEventListener('click', function () {
  textField.classList.toggle('text-left');
  textField.classList.remove('text-center', 'text-right', 'text-justify');
  //   textField.classList.remove('text-center text-justify text-right');
});
alignRight.addEventListener('click', function () {
  textField.classList.toggle('text-right');
  textField.classList.remove('text-center', 'text-left', 'text-justify');
  //   textField.classList.remove('text-center text-left text-right');
});
alignCenter.addEventListener('click', function () {
  textField.classList.toggle('text-center');
  textField.classList.remove('text-left', 'text-right', 'text-justify');
  //   textField.classList.remove('text-justify text-left text-right');
});
alignJustify.addEventListener('click', function () {
  textField.classList.toggle('text-justify');
  textField.classList.remove('text-left', 'text-right', 'text-center');
  //   textField.classList.remove('text-center text-left text-right');
});

fontSize.addEventListener('input', function () {
  const newSize = fontSize.value;
  console.log(newSize);
  textField.style.fontSize = newSize + 'px';
  textField.style.display = 'inline';
});

textCapital.addEventListener('click', function () {
  textField.classList.toggle('uppercase');
});

colorInput.addEventListener('input', function () {
  const newColor = colorInput.value;
  textField.style.color = newColor;
});
