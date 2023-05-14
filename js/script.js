$(".input").mask("#,##0.00", { reverse: true });

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll('.input');
  let hasEmptyField = false;
  let emptyField;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      hasEmptyField = true;
      emptyField = input.placeholder;
    }
  });

  if (hasEmptyField) {
    const message = `Informe o valor da ${emptyField}`;
    showToast(message);
  } else {
    hideToast();
  }
});
