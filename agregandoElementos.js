$(document).ready(function(){
    var contenedor = $('#contenedor');
    var contador = 1;

    $('#agregar').on('click', function(){
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;

        //contenedor.append(caja);// Nos permite agregar al inicio de nuestro contenedor lo que seria nuestra caja

        
        //contenedor.prepend(caja);

        
        //contenedor.before(caja);

        
        contenedor.after(caja);

        if(contador == 11){
            $('#agregar').off('click')
        }
    })

    //.remove() nos permite eliminar tanto el elemento como elementos hijos
    //contenedor.remove();
    //contenedor.children().remove();
    contenedor.empty(); //eliminamos todo lo que tiene dentro el contenedor

})