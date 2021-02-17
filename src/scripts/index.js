function getGridSize() {
    return (window.innerWidth < 480) ? 1 :
            (window.innerWidth < 720) ? 2 :
            (window.innerWidth < 1140) ? 3 : 4;
}
function throttle(f, t) {
    return function (args) {
      let previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall === undefined // function is being called for the first time
          || (this.lastCall - previousCall) > t) { // throttle time has elapsed
        f(args);
      }
    }
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
    var clY =  0.5;
    var clX =  0.5;

    window.addEventListener('scroll', parallax);
    window.addEventListener('mousemove', parallax);


    function parallax(e){
        let scroll = $(window).scrollTop();
        let height = $(window).height(); 
        clY = e.pageY ? e.pageY / window.innerHeight : clY;
        clX = e.pageX ? e.pageX / window.innerWidth: clX;
        $('.js-parallax').each(function(){
            console.log('par');
            $this = $(this);
            let offset = $this.offset();
            if ($this.hasClass('mod-p-1')){
                $this.css('transform', 'translate3d('+(clX-0.5)*50+'px, '+((-scroll+(offset.top+height)/2)*0.12+(clY-0.5)*30)+'px, 0)');
                return;
            }
            if ($this.hasClass('mod-p-2')){
                $this.css('transform', 'translate3d('+(clX-0.5)*30+'px, '+((-scroll+(offset.top+height)/2)*0.08+(clY-0.5)*20)+'px, 0)');
                return;
            }
            if ($this.hasClass('mod-p-3')){
                $this.css('transform', 'translate3d('+(clX-0.5)*10+'px, '+((-scroll+(offset.top+height)/2)*0.04+(clY-0.5)*10)+'px, 0)');
                return;
            }
            $this.css('transform', 'translate3d('+(clX-0.5)*10+'px, '+(0+(clY-0.5)*10)+'px)');
        });

    }

});