$(document).ready(function(){

    //$(selector).animate({parametros}, velocidad, callback)
    //
    $('#boton').on('click', function cambio(){
        $('#caja').animate({
            width: '300px',
            // opacity: '0.2'

            //utilizamos los signos de incremento y decremento si queremos editar las dimenciones de nuestra caja
            // width: '+=300px'
        }, 300, function(){
            // alert('Fin de la animacion')
        });

        // $('.caja').toggleClass('animacion')


    });

    $('#desactivar').on('click', function(){
        $('#caja').stop('animate')
    })

})