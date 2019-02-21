$(document).foundation();

$(document).ready(function(){
    $("#slider").owlCarousel({
        autoplay: true,
        mouseDrag: false,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        items:1,
        animateOut: 'fadeOut',
        
    })

    $("#slider2").owlCarousel({
        autoplay: true,
        mouseDrag: false,
        loop: true,
        items:1,
        paginationSpeed : 7000,
        slidespeed: 7000,
        
    })

  });


   








  $(function() {
    var header = $(".rwrap");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});
    

