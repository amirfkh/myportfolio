$(document).ready(function(){
    //کد تنظیم باز و بسته شدن سبد خرید
   $(".open-cart").click(function () {
       $(".open-cart").toggleClass("active-cart");
       $(".cart").fadeToggle();
   });
   //تایمر
   $(".sale-timeout-counter").startTimer();
});