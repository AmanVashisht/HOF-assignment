// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that 
// they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should 
// start with https://www.linkedin.com/in/ followed by a combination of one or more letters, digits, 
// underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be 
// between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not 
// match URLs that do not follow this format or contain invalid characters. The program should provide
// clear output messages indicating whether each input is a valid LinkedIn profile URL or not.

const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}/;

function validateLinkedInURL(input) {
  if (linkedinRegex.test(input)) {
    console.log(`"${input}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`"${input}" is not a valid LinkedIn profile URL.`);
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/john-doe123");
validateLinkedInURL("https://www.linkedin.com/in/emma_smith");
validateLinkedInURL("https://www.linkedin.com/in/username-123");
validateLinkedInURL("https://www.linkedin.com/in/shor");
validateLinkedInURL("https://www.linkedin.com/in/invalid@profile");
