function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  document.getElementById('homeBtn').addEventListener('click', function() {
    changeBackgroundColor('#007bff');
  });
  
  document.getElementById('aboutBtn').addEventListener('click', function() {
    changeBackgroundColor('#28a745');
  });
  
  document.getElementById('servicesBtn').addEventListener('click', function() {
    changeBackgroundColor('#dc3545');
  });
  
  document.getElementById('contactBtn').addEventListener('click', function() {
    changeBackgroundColor('#ffc107');
  });