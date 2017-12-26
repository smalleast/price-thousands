var thousandsRE = /\d{1,3}(?=(\d{3})+$)/g;
var pointRe = /^(\d+)((\.\d+)?)$/;

module.exports = function(inString, inSpeparator) {
  var replaceStr = '$&' + (inSpeparator || ',');
  var numberVal = inString * 1;
  var string = numberVal>=0 ? String(inString) : String(inString).slice(1);
  var value = string.replace(pointRe, function(str, s1, s2) {
    return s1.replace(thousandsRE, replaceStr) + s2;
  });　
  return numberVal >= 0 ? value : '-' + value;
};
