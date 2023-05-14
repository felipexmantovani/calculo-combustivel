
hideToast();
function showToast(message) {
  $('#toast-message').text(message);
  $('#toast').addClass('active');

  setTimeout(function() {
    $('#toast').removeClass('active');
  }, 5000);
}

function hideToast() {
  $('#toast').removeClass('active')
}