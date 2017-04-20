var Pangram = function(str) {
  this.sentence = str;
};

Pangram.prototype.isPangram = function() {
  var _arr = this.sentence.split('');
  if (!_arr || _arr.length === 0) {
    return false;
  }

  var _standard = 'a'.charCodeAt();
  var _res = [];
  _arr.forEach(function(ele, idx) {
    if(ele && ele.toLowerCase()) {
      var _codeAt = ele.toLowerCase().charCodeAt();
      var _index = _codeAt - _standard;
      if(_index >= 0 && _index < 26){
        _res[_index] = 1;
      }
    }
  });
  console.info(_res);
  var _sub = 0;
  _res.forEach(function(ele, idx){
    if (ele && ele === 1) {
      _sub++;
    }
  })

  if (_sub == 26) {
    return true;
  } else {
    return false;
  }
}

module.exports = Pangram;
