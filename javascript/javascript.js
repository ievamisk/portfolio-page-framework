$(document).ready(function(){
    /*$('.materialboxed').materialbox();*/
    $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
    
    $('.parallax').parallax();
    
    $('nav ul li > a').click(function() {
        var id = $(this).attr('block');
        var off= parseInt($(id).offset().top, 10)-66;
        $('html,body').animate({
            scrollTop: off},
            'slow');
    });
    $('.modal').modal();
});
    
//    
//    $('.modal').modal({
//      dismissible: true, // Modal can be dismissed by clicking outside of the modal
//      opacity: .5, // Opacity of modal background
//      inDuration: 300, // Transition in duration
//      outDuration: 200, // Transition out duration
//      startingTop: '4%', // Starting top style attribute
//      endingTop: '10%', // Ending top style attribute
//    }
//  );



