function rot13(str) {

 var inputLETTER     = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var outputLETTER    = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'];

  var index     = x => inputLETTER.indexOf(x);
  var translate = x => index(x) >= 0 ? outputLETTER[index(x)] : x;
  return str.split('').map(translate).join('');
}

rot13("SERR PBQR PNZC");
