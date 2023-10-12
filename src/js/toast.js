const TOAST_TYPE = {
  SUCESS: 'success',
  WARNING: 'warning',
  INFO: 'info'
}

const TOAST = $('#toast');

function showToast(message, type = TOAST_TYPE.INFO, time = 5000) {
  hideToast();

  $(TOAST).addClass(`active`);
  $(TOAST).addClass(type);

  $('#toast-message').remove();
  const MESSAGE = `<span id="toast-message">${message}</span>`;
  $(TOAST).append(MESSAGE);

  setTimeout(() => hideToast(), time);
}

function hideToast() {
  $(TOAST).removeClass(`active`);

  Object.keys(TOAST_TYPE).forEach(key => {
    $(`.${TOAST_TYPE[key]}`).removeClass();
  });
}