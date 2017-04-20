var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
  var res = '';
  var _ranTranscribe = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };
  var _ranArr = input.split('');
  while(_ranArr && _ranArr.length > 0){
    var _char = _ranArr.shift();
    if ( _ranTranscribe[_char] ) {
      res+=_ranTranscribe[_char];
    } else {
      throw new Error('Invalid input');
    }
  }
  return res;
}

module.exports = DnaTranscriber;
