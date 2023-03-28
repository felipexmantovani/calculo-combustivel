const form = document.querySelector('form');

toast();
form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const inputs = form.querySelectorAll('.input');
  let hasEmptyField = false;
  
  // Verifica se algum campo de entrada está vazio
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      hasEmptyField = true;
    }
  });

  if (hasEmptyField) {
    // Exibe o toast se houver algum campo de entrada vazio
    document.getElementById('toast').style.display = 'inline';
    setTimeout(function(){
        document.getElementById('toast').animate([
            
            { transform: 'translateY(38px)'},
            
           
           
        ],{
            duration:100,
            iteration: 1
        }
        ).onfinish = function() {
            toast();
        };
    }, 5000);
  } else {
    
toast();
  }
});

function toast() {
  document.getElementById('toast').style.display = 'none';    
}
