var main = function() {
//Get Week Number
// .addClass('info')
// .removeClass('info')

  var today = new Date();
  var weekNo = today.getWeek();
  document.getElementById(weekNo).addClass('info');

};

$(document).ready(main);


//Get week number function
Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullyear(),0,1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}


//Schedule
var schedule = {
  'wk1' : [1], 'wk2' : [2], 'wk3' : [3],  'wk4' : [4],  'wk5' : [5],  'wk6' : [6],
  'wk7' : [7], 'wk8' : [8], 'wk9' : [9], 'wk10' : [10], 'wk11' : [11], 'wk12' : [12],
  'wk13' : [13], 'wk14' : [14], 'wk15' : [15], 'wk16' : [16], 'wk17' : [17], 'wk18' : [18],
  'wk19' : [19], 'wk20' : [20], 'wk21' : [21], 'wk22' : [22], 'wk23' : [23], 'wk24' : [24],
  'wk25' : [25], 'wk26' : [26], 'wk27' : [27], 'wk28' : [28], 'wk29' : [29], 'wk30' : [30],
  'wk31' : [31], 'wk32' : [32], 'wk33' : [33], 'wk34' : [34], 'wk35' : [35], 'wk36' : [36],
  'wk37' : [37], 'wk38' : [38], 'wk39' : [39], 'wk40' : [40], 'wk41' : [41], 'wk42' : [42],
  'wk43' : [43], 'wk44' : [44], 'wk45' : [45], 'wk46' : [46], 'wk47' : [47], 'wk48' : [48],
  'wk49' : [49], 'wk50' : [50], 'wk51' : [51], 'wk52' : [52], 'wk53' : [53]
};
