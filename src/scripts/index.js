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
    $(document).on('click','.js-hide-block', function(e){
        e.preventDefault();
        let ref = $(this).data('block');
        $('section').not('.'+ref).slideDown('slow');
        $('section.' + ref).slideToggle('slow');
    });
    
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        let height = $(window).height();
        console.log(height);
        $('.js-parallax').each(function(){
            $this = $(this);
            let offset = $this.offset();
            console.log(offset, scroll);
            if ($this.hasClass('mod-p-1')){
                $this.css('transform', 'translateY('+(-scroll+(offset.top+height)/2)*0.12+'px)');
                return;
            }
            if ($this.hasClass('mod-p-2')){
                $this.css('transform', 'translateY('+(-scroll+(offset.top+height)/2)*0.08+'px)');
                return;
            }
            if ($this.hasClass('mod-p-3')){
                $this.css('transform', 'translateY('+(-scroll+(offset.top+height)/2)*0.04+'px)');
                return;
            }
            $this.css('transform', 'translateY('+(-scroll+(offset.top+height)/2)*0+'px)');
        });
    });

});