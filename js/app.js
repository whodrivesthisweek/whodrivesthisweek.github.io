var app = angular.module('DriveApp', []);

$(function(){
  $('#page-header').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
  {
    if($('#page-header').data('size') == 'big')
    {
      $('#page-header').data('size','small');
      $('#page-header').stop().animate({
        paddingBottom:'20px'
      },600);
    }
  }
  else
  {
    if($('#page-header').data('size') == 'small')
    {
      $('#page-header').data('size','big');
      $('#page-header').stop().animate({
        paddingBottom:'100px'
      },600);
    }
  }
});