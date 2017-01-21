var app = angular.module('DriveApp', []);
var timeoutID;

// hold title in the middle of the screen
$(window).bind("load", function() {
  timeoutID = window.setTimeout(afterLoad,1300);
});

// move title to top and then fade in page content
function afterLoad() {
  $('#page-header').stop().animate({
    'padding-top' : '0px',
  }, 800);
  
  $('#driving-schedule').delay(800).fadeIn(800);
  
  $('#holiday-schedule').delay(800).fadeIn(800);
  
  $('#hotline-button').delay(800).fadeIn(800);
  
  $('#quote-text').delay(800).fadeIn(800);
  
  $('#countdown').delay(800).fadeIn(800);
}

// set the date we're counting down to
var target_date = new Date('Jan, 19, 2021').getTime();
 
// variables for time units
var years, days, hours, minutes, seconds, bar_width;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    var percentage = (target_date - current_date) / (4 * 315360000);
  
    bar_width = parseInt(percentage);
  
    // do some time calculations
    years = parseInt(seconds_left / 31536000);
    seconds_left = seconds_left % 31536000;
  
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = '<span class="years">' + years + ' :</span> <span class="days">' + days +  ' :</span> <span class="hours">' + hours + ' :</span> <span class="minutes">'
    + minutes + ' :</span> <span class="seconds">' + seconds + ' </span> <div class="progress"><div class="progress-bar" style="width: ' + bar_width + '%" ></div></div>';  
  
    /*
            <div class="col-md-6 col-sm-12 col-xs-12" id="countdown">
            <div class="progress">
              <div class="progress-bar" style="width: 60%" ></div>
            </div>
          </div>
          */
 
}, 1000);
