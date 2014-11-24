var main = function() {
  // Get today's date
  var today = new Date();
  
  // Driving Schedule
  var schedule = {
    'wk45' : ['November 3 2014', 'November 8 2014'],
    'wk46' : ['November 10 2014', 'November 16 2014'],
    'wk47' : ['November 17 2014', 'November 23 2014'],
    'wk48' : ['November 23 2014', 'November 30 2014'],
    'wk49' : ['November 30 2014', 'December 8 2014'],
    'wk50' : ['December 8 2014', 'December 14 2014'],
    'wk51' : ['December 14 2014', 'December 21 2014'],
    'wk52' : ['December 21 2014', 'December 28 2014'],
    'wk1' : ['December 28 2014', 'January 4 2015'],
    'wk2' : ['January 4 2015', 'January 11 2015'],
  };
  
  for (var weekno in schedule) {
      //console.log('checking ' + weekno + ', dates have to be within the ' + schedule[weekno] + 'range');
      //console.log(Date.parse(schedule[weekno]));
      if (today >= Date.parse(schedule[weekno][0]) && today <= Date.parse(schedule[weekno][1])) {
        //console.log(weekno + ' is the current week!');
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
