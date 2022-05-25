// app/age.js

exports.ageToSeconds = function(years) {
  //  var leapYears = years / 4 + 1;
  //  return Calculate(leapYears, 366) + Calculate(years - leapYears - 1, 365);

  return Calculate(years, 365);
};

function Calculate(years, days){
    return years * 24 * 60 * 60 * days;
}