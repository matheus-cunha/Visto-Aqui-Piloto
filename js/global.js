// CAROUSEL
var $item = $('.landing-carousel .carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

$('.landing-carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);

  // RESPONSIVE TEXTAREA
  if($wHeight <= 700) {
    $('#form-text').attr('rows', '1');
  } else {
      $('#form-text').attr('rows', '3');
  }
});

// SCROLL
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});