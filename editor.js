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



textStyle(textBold, 'font-bold');
textStyle(textItalic, 'italic');
textStyle(textUnderline, 'underline');



alignText(alignLeft, 'text-left', [
  'text-center',
  'text-right',
  'text-justify',
]);

alignText(alignRight, 'text-right', [
  'text-center',
  'text-left',
  'text-justify',
]);

alignText(alignCenter, 'text-center', [
  'text-left',
  'text-right',
  'text-justify',
]);
alignText(alignJustify, 'text-justify', [
  'text-left',
  'text-right',
  'text-center',
]);

fontSize.addEventListener('input', function () {
  const newSize = fontSize.value;
  //   console.log(newSize);
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
