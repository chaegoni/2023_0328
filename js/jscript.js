$(document).ready(function(){
    $(".menu").click(function(){
        $(".nav").slideToggle();
    });
});

$(window).resize(function(){
    if(window.innerWidth<=599){
        $(".nav").show();
    }
});