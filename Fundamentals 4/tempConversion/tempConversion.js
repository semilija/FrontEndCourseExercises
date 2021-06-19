const ftoc = function(fahrenheit) {
  return parseFloat(((fahrenheit - 32) * (5 / 9)).toFixed(1));

}

const ctof = function(celsius) {
  return parseFloat(((celsius * (9 / 5)) + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
