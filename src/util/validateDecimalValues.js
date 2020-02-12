
export default function validateDecimalValues(string = '') {

  if (string.match(/^(\d*\.)?\d+$/)) {
    return string;
  }

  var re1 = /[,]/gi;
  var re2 = /[-]/gi;
  var re3 = /[ ]/gi;

  string = string.replace(re1, "");
  string = string.replace(re2, "");
  string = string.replace(re3, "");


  return string;
}
