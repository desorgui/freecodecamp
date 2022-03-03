var myRegex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/im;

function telephoneCheck(str) {
  return myRegex.test(str);
}
console.log(telephoneCheck("1 (555)555-5555"));
