/* ================================
===  BACKGROUND SLIDER        ====
================================= */
$.vegas('slideshow', {
  delay:20000,
  backgrounds:[
    
    { src:'images/backgrounds/BG/10.gif',fade:1000 },
    { src:'images/backgrounds/BG/4.jpg', fade:1000 },
    { src:'images/backgrounds/BG/003.jpg', fade:1000 },
    { src:'images/backgrounds/BG/001.jpg', fade:1000 },
    { src:'images/backgrounds/BG/002.jpg', fade:1000 },
    

  ]
});


/* =================================
  LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut(1000);
        // will fade out the whole DIV that covers the website.
	jQuery(".loader").delay(`500`).fadeOut(1000);
})









$(window).scroll(function(){
  $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});


$(".img-list").click(function (e) { 
  $("#boxContainner").addClass("d-flex");
  var imgSrc = e.target.src;
  console.log(imgSrc);
  $(".inner-box").css("background-image", "url("+imgSrc+")");
})

$("#closeBtn").click(function () { 
  $("#boxContainner").removeClass("d-flex");
});







$("#submit").click(function () { 
  $("#name").val()= "";
  
});