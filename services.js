
$(document).ready(function() {
    // Ocultar todos los elementos itemCarrusel al inicio
    $('.itemCarrusel').hide();

    // Mostrar el primer elemento itemCarrusel
    $('#itemCarrusel-1').show();

    // Manejar el evento de clic en las flechas
    $('.flechasCarrusel a').on('click', function(e) {
        e.preventDefault(); // Prevenir la acción predeterminada (seguir el enlace)

        // Ocultar el elemento itemCarrusel actual
        $(this).closest('.itemCarrusel').hide();

        // Mostrar el siguiente elemento itemCarrusel
        var nextItem = $('#' + $(this).data('target'));
        if(nextItem.length) {
            nextItem.show();
        }
    });
});


                   