function convertToRoman(num) {
 var romanNums = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
 var romanNum = '';
  for ( var i in romanNums ) {
    while ( num >= romanNums[i] ) {
      romanNum += i;
      num -= romanNums[i];
    }
  }
  return romanNum;
}

convertToRoman(36);
