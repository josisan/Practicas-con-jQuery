$(document).ready(function(){
    $('#start').on('click', function(){
        $('.caja').animate({
            marginLeft: '500px'
        }, 2000);
        
        $('.caja').animate({
            marginLeft: '0px'
        }, 2000);

    });

    $('#stop').on('click', function(){
        //.stop(limpiarAnimaciones, saltar al final);
        $('.caja').stop(true, false)

    })
});