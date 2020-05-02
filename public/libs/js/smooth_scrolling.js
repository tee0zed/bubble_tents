$(function(){
  $('a').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top -55)
    }, 700);
    return false;
  });
});
