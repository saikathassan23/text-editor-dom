function alignText(alignWhere, align, remove) {
  alignWhere.addEventListener('click', function () {
    textField.classList.toggle(align);
    textField.classList.remove(remove[0], remove[1], remove[2]);
  });
}
function textStyle(event, style) {
  event.addEventListener('click', function () {
    textField.classList.toggle(style);
  });
}
