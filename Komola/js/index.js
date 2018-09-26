$(function(){
  'use strict';
    /*scale of class pricing*/
$(".simple .container >div:not(:eq(2))").mouseenter(function(){
     $(this).addClass("great").css({cursor: 'pointer'});
     $(this).children('h1').addClass('h1').css({color:'gray'});  
     $(".simple .container div:eq(2)").removeClass("great");
     $(".page5 .container div:eq(2) h1").removeClass('h1')});      
$(".simple .container >div:not(:eq(2))").mouseleave(function(){
     $(this).removeClass("great");
     $(this).children('h1').removeClass('h1');
     $(".simple .container div:eq(2)").addClass("great");
   $(".simple .continer div:eq(2) h1").addClass('h1');  
 });
/*start scroll*/
    $('.list li').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });
       $('.list li a').click(function()                         
   {
    $('html, body').animate({
     scrollTop: $('#' +$(this).data('value')).offset().top
    },3000); 
   });
    /*start up to window*/
    $(window).on("scroll",function(){ 
    var sc=$(window).scrollTop();
    if(sc>200){
      $(".end").removeClass("up");
  }else{ $(".end").addClass("up");}});
    
    //portifolio mixItUp
 
    $('#container').mixItUp();
    
  // Links Add Active slider
    $('.option li').click(function () {
       $(this).addClass('active').siblings().removeClass('active');   
    });
});
    /*start validation*/
    function validateForm() {
    var x = document.forms["myform"]["namef"].value;
    var a = document.forms["myform"]["namel"].value;
    var b = document.forms["myform"]["sub"].value;
    var y = document.forms["myform"]["email"].value;
    var z = document.forms["myform"]["message"].value;
    if (x == null || x == "") {
        alert("you must complete your frist name in form");
        return false;
    }
    else if (a == null || a == "") {
        alert("you must complete your last name in form");
        return false;
    }
    else if (b == null || b == "") {
        alert("you must complete your subject in form");
        return false;
    }
    else if (y == null || y== "") {
        alert("you must complete your email form");
        return false;
    }
    else if (z == null || z == "") {
        alert("you must complete your massage form");
        return false;
    }

    }