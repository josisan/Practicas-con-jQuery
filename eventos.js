$(document).ready(function(){
    var boton = $('#boton');
    
    // boton.click(function(){
    //     alert('Hola');
    // });


    //Evento con funcion
    function saludo(){
        alert('Saludos Terricola, tu Dispositivo a sido Hackeado ;)');
    }
    //boton.click(saludo);
        boton.on('click', saludo);
     

    function operation(){
        boton.on('click', saludo);
        boton.on('mouseover', function(){document.body.style.background = '#000'})
        boton.on('mouseout', function(){document.body.style.background = '#fff'})
    }

    //Evento con Callback
    boton.on('mouseover', function(){
        document.body.style.background = '#000';
    })
    boton.on('mouseout', function(){
        document.body.style.background = '#fff';
    })

    
    $('#desactivar').on('click',function(){
        boton.off('click');
        boton.off('mouseover');
        alert('Boton de Ejecutar desactivado')
    })
    
    $('#activar').on('click', function(){

        boton.addEventListener('click',operation())
        alert('Boton de Ejecutar activado')
    })

    //Preveniendo el comportamiento de los enlaces
    $('a').on('click',function(e){
        e.preventDefault();
        alert('Link desactivado');
    })

})