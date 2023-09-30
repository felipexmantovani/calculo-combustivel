  console.log("asdsdas")
$('.input').mask('#,##0.00', { reverse: true });

const FORM = document.querySelector('form');

FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  hideToast();

  const INPUTS = FORM.querySelectorAll('.input');
  const INPUT_EMPTY = Object.values(INPUTS).filter(input => input.value.trim() === '');

  if (INPUT_EMPTY.length > 0) {
    showToast(`Informe o valor do campo ${INPUT_EMPTY[0].placeholder}`, TOAST_TYPE.WARNING);
    return;
  }
  showToast(`Abasteça com ${getFuelThatCompensates()}`, TOAST_TYPE.SUCESS);
});

function getFuelThatCompensates() {

  const VALOR_ETANOL = parseFloat(document.getElementById('inputEtanol').value)
  const VALOR_GASOLINA = parseFloat(document.getElementById('inputGasolina').value)
  const PORCENTAGEM = VALOR_GASOLINA * 0.75

  if (PORCENTAGEM >= VALOR_ETANOL) {
    return "Etanol"
  }
  else {
    return "Gasolina"
  }
}
