var app = angular.module('DriveApp', []);
var timeoutID;

$(window).bind("load", function() {
  timeoutID = window.setTimeout(afterLoad,1300);
});

function afterLoad() {
  $('#page-header').stop().animate({
    'padding-top' : '0px',
    'padding-bottom' : '0px'
  }, 800);
}
