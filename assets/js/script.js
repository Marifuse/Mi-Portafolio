// Funciones
// Función scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    // Tooltip a href de Sección experiencias
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });
    // Popover en mi nombre
    $(function () {
      $('[data-toggle="popover"]').popover()
    });
  });
