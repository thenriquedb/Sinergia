
export default function validateDecimalValues(string = '') {

  if (string.match(/^(\d*\.)?\d+$/)) {
    return string;
  }

  const regex = /([?.   ][,]|[-]|[ ])/gi;
  string = string.replace(regex, "");

  return string;
}
