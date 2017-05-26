
$(document).ready(function(){
  
  $(document).scroll(function(e){
    if ($(this).scrollTop() > 1100){
      $('.outlets').addClass('in');
    }
  });

  // go top
 $('#go-top').click(function(e){

      e.preventDefault();
      var target = $(e.currentTarget).attr('href');
      var offset = $(target).offset();
      $('html, body').animate({scrollTop: offset.top});
  });


  
});


