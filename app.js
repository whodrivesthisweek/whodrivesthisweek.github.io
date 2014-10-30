var main = function() {
  // Get today's date
  var today = new Date();
  
  // Driving Schedule
  var schedule = {
    'wk42' : ['October 13 2014', 'October 19 2014'],
    'wk43' : ['October 20 2014', 'October 26 2014'],
    'wk44' : ['October 27 2014', 'November 2 2014'],
    'wk45' : ['November 3 2014', 'November 9 2014'],
    'wk46' : ['November 10 2014', 'November 16 2014'],
    'wk47' : ['November 17 2014', 'November 23 2014'],
    'wk48' : ['November 24 2014', 'November 30 2014'],
    'wk49' : ['December 1 2014', 'December 7 2014'],
    'wk50' : ['December 8 2014', 'December 14 2014'],
    'wk51' : ['December 15 2014', 'December 21 2014'],
    'wk52' : ['December 22 2014', 'December 28 2014'],
    'wk1' : ['December 29 2014', 'January 4 2015'],
    'wk2' : ['January 5 2015', 'January 11 2015'],
  };
  
  for (var weekno in schedule) {
    // Highlight row if today falls between days
    if (today >= Date.parse(schedule[weekno][0]) && today <= Date.parse(schedule[weekno][1])) {
      document.getElementById(weekno).classList.add('info');
    };
  };
};

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

$(document).ready(main);
