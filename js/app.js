var app = angular.module('DriveApp', []);
var timeoutID;

$(window).bind("load", function() {
  timeoutID = window.setTimeout(afterLoad,1300);
});

function afterLoad() {
  $('#page-header').stop().animate({
    'padding-top' : '0px',
  }, 800);
  
  $('#driving-schedule').delay(800).fadeIn(800);
  
  $('#holiday-schedule').delay(800).fadeIn(800);
  
  $('#hotline-button').delay(800).fadeIn(800);
  
  $('#quote-text').delay(800).fadeIn(800);
}
