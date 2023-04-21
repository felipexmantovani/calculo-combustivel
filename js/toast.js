
hideToast();

function showToast() {
  $('#toast').addClass('active')

  setTimeout(function () {
    
    document.getElementById('toast').animate([

      { transform: 'translateY(38px)' },

    ], {
      duration: 100,
      iteration: 1
    }
    ).onfinish = function () {
      hideToast()
    };
  }, 5000);
}

function hideToast() {
  $('#toast').removeClass('active')
}