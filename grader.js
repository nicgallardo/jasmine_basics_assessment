exports.grades = function (score) {
  if(score >= 90){
    if(score >= 98){
      return 'A+';
    }else if(score < 94){
      return 'A-';
    }else{
      return "A";
    }
  }else if(score >= 80){
    if(score >= 88){
      return 'B+';
    }else if( score < 84){
      return 'B-';
    }else{
    return 'B';
    }
  }else if(score >= 70){
    if(score >= 78){
      return "C+";
    }else if(score <74){
      return 'C-';
    }else{
      return 'C';
    }
  }else if(score >= 60){
    if(score >= 68){
      return 'D+';
    }else if( score < 64){
      return 'D-';
    }else{
    return 'D';
    }
  }else if(score < 60){
    return 'F';
  }
}

exports.average = function (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i] << 0;
  }
  var avg = total / array.length;
  return avg
}

exports.median = function (array) {
  array.sort( function(a,b) {return a - b;} );
  var half = Math.floor(array.length/2);
  if ( array.length % 2 ){
    return array[half];
  }else{
    return (array[half-1] + array[half]) / 2.0;
  }
}

exports.mode = function (array) {
  var mode = {};
  var maximum = 0, count = 0;
  array.forEach(function(i) {
    if (mode[i]) { mode[i]++; }
      else { mode[i] = 1; } 
    if (count<mode[i]) { 
      maximum = i;
      count = mode[i];
    }
  });
  return maximum;
}


