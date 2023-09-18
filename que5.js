// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or
// https://, followed by one or more letters, digits, or special characters, followed by a dot, followed
// by one or more letters. Print a message indicating if the input matches the conditions or not.

const urlRegex = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'()*+,;=]+[A-Za-z]/;

function checkURL(input) {
  if (urlRegex.test(input)) {
    console.log(`"${input}" is a valid URL.`);
  } else {
    console.log(`"${input}" is not a valid URL.`);
  }
}

// Test cases
checkURL("http://ww[]w.example.com");
checkURL("https://www.test123.net");
checkURL("ftp://invalid.com");
