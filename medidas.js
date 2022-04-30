$(document).ready(function(){

    var titulo = $('#titulo');
    var info = $('#info');

    //Calcula el ancho del elemento
    info.append('Ancho: ' + titulo.width() + '<br>');

    //Calcula el ancho del elemento + el padding
    info.append('Ancho Interno: ' + titulo.innerWidth() + '<br>');

    //Calcula el ancho del elemento + el padding + el borde
    info.append('Ancho Externo: ' + titulo.outerWidth() + '<br>');

    //Calcula el ancho del elemento + el padding + el borde + el margin
    info.append('Ancho Externo: ' + titulo.outerWidth(true) + '<br><br>')

    //-------

    //Calcula el alto
    info.append('Alto: ' + titulo.height() + '<br>')

    //Calcula el alto + padding
    info.append('Alto Interno: ' + titulo.innerHeight() + '<br>')

    //Calcula el alto + padding + borde
    info.append('Alto Externo: ' + titulo.outerHeight() + '<br>')

    //Calcula el alto + padding + borde + margin
    info.append('Alto Externo: ' + titulo.outerHeight(true) + '<br>')

    


    
})