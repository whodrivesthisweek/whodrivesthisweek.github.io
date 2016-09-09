var app = angular.module('DriveApp', []);

$(function(){
  $('#page-header').data('size', 'big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
  {
    if($('#page-header').data('size') == 'big')
    {
      $('#page-header').data('size','small');
      $('#page-header').stop().animate({
        'padding-bottom' : '0px',
        'padding-top' : '0px'
      }, 800);
      $("h3").addClass("hidden");
    }
  }
  else
  {
    if($('#page-header').data('size') == 'small')
    {
      $('#page-header').data('size','big');
      $('#page-header').stop().animate({
        'padding-bottom' : '1000px',
        'padding-top' : '150px'
      }, 800);
      $("h3").removeClass("hidden");
    }
  }
});