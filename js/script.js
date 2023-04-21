
$(".input").mask("#,##0.00", { reverse: true });

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('.input');
    let hasEmptyField = false;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            hasEmptyField = true;
        }
    });

    if (hasEmptyField) {
        showToast();
    }
    else {

        hideToast()
    }

});

