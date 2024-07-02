// Quando a página é carregada, define o estado de exibição da aba para 'none'
window.onload = function() {
  var aba = document.getElementById('aba');
  aba.style.display = 'none';
};

document.getElementById('toggleButton').addEventListener('click', function() {
  var aba = document.getElementById('aba');
  var icon1 = document.getElementById('icon1');
  var icon2 = document.getElementById('icon2');
  if (aba.style.display === 'none') {
    aba.style.display = 'block';
    setTimeout(function() {
      aba.style.opacity = 1;
    }, 1); // Timeout for 1ms to wait for display to change to block
    icon1.style.display = 'none';
    icon2.style.display = 'inline';
  } else {
    aba.style.opacity = 0;
    setTimeout(function() {
      aba.style.display = 'none';
    }, 300); // Timeout for 300ms to wait for opacity transition to finish
    icon1.style.display = 'inline';
    icon2.style.display = 'none';
  }
});