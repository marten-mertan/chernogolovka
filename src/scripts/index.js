function getGridSize() {
    return (window.innerWidth < 480) ? 1 :
            (window.innerWidth < 720) ? 2 :
            (window.innerWidth < 1140) ? 3 : 4;
}

$(window).load(function(){

    $('.js-mult-slider').flexslider({
        animation: "slide"
    });
    $('.js-mult-buy-slider').flexslider({
        animation: "slide",
        itemWidth: 229,
        itemMargin: 40,
        controlNav: false,
        prevText: "",
        nextText: "",
        minItems: getGridSize(),
        maxItems: getGridSize()
    });
    $(document).on('click','.js-product-item', function(e){
        e.preventDefault();
        let ref = $(this).attr('href')
        $('.js-product-description').removeClass('open');
        $(ref).addClass('open');
    });
    $(document).on('click','.js-product-description-close', function(e){
        e.preventDefault();
        $('.js-product-description').removeClass('open');
    });
});