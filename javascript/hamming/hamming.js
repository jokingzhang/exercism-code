var Hamming = function() {};

Hamming.prototype.compute = function(input1, input2) {
  var _res = 0;
  if(!input1 || !input2) {
    throw new Error("Input hava a problem.");
  }
  var arr1 = input1.split('');
  var arr2 = input2.split('');
  if (arr1.length !== arr2.length) {
    throw new Error("DNA strands must be of equal length.");
  } else {
    var _len = arr1.length;
    while(_len > 0){
      var _letter1 = arr1.shift();
      var _letter2 = arr2.shift();
      if (_letter1 !== _letter2) {
        _res++;
      }
      _len--;
    }
  }
  return _res;
}

module.exports = Hamming;


