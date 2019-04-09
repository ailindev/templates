window.addEventListener('DOMContentLoaded', function() {
   var req = new XMLHttpRequest();

   req.onload = function() {
      // Ввести id элемента, в который будет вложено меню
      document.getElementById('wrapper').innerHTML = this.responseText;
   };
   // Ввести название подключаемого html файла
   req.open("get", "filename.html", true);
   req.send();
});
