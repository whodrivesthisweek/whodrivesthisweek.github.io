var main = function() {
  // Get today's date
  var today = new Date();
  today = Date.parse(today);
  
  
  // Driving Schedule
  var schedule = {
    'wk1' : ['December 27 2014', 'January 4 2015'],
    'wk2' : ['January 3 2015', 'January 10 2015'],
    'wk3' : ['January 10 2015', 'January 17 2015'],
    'wk4' : ['January 17 2015', 'January 24 2015'],
    'wk5' : ['January 24 2015', 'January 31 2015'],
    'wk6' : ['January 31 2015', 'February 7 2015'],
    'wk7' : ['February 7 2015', 'February 14 2015'],
    'wk8' : ['February 14 2015', 'February 21 2015']
  };
  
  for (var weekno in schedule) {
      //console.log('checking ' + weekno + ', dates have to be within the ' + schedule[weekno] + 'range');
      //console.log(Date.parse(schedule[weekno]));
      if (today >= Date.parse(schedule[weekno][0]) && today <= Date.parse(schedule[weekno][1])) {
        //console.log(weekno + ' is the current week!');
        document.getElementById(weekno).classList.add('light-primary-color');
      };
    };
  };

/*
// Load Disqus Comments on click
$('.show-comments').on('click', function(){
          var disqus_shortname = 'whodrivesthisweek'; // Replace this value with *your* username.
          // ajax request to load the disqus javascript
          $.ajax({
                  type: "GET",
                  url: "http://" + disqus_shortname + ".disqus.com/embed.js",
                  dataType: "script",
                  cache: true
          });
          // hide the button once comments load
          $(this).fadeOut();
    });
*/

$('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
};

$(function() {
  $('.toggle-nav').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
});

$(document).ready(main);
