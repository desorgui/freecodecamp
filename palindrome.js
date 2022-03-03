function palindrome(str) { 
  var palindromeString = str.toLowerCase().split(/[^a-z0-9]/gi).join(''); 
    const len = palindromeString.length;  
    for (let i = 0; i < len / 2; i++) {  
  
        if (palindromeString[i] !== palindromeString[len - 1 - i]) {  
            return false  
        }  
    }  
    return true;  
}  
    
palindrome("eye");
