/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
// Create a variable called quotes.
const quotes = [
  // Inside of this array variable, write down key & values for each object. Quote, source and year.
  // Start by creating object properties
  // Create five different arrays
  {
    quote: "By the time we've made it, we've had it.",
    source: "Malcolm Forbes",
    citation: "New York Times",
  },
  {
    quote: "He that can't endure the bad, will not live to see the good.",
    source: "Jewish Proverb",
  },
  {
    quote: "Honest differences are often a healthy sign of progress.",
    source: "Mahatma Gandhi",
    citation: "Maxim",
  },
  {
    quote: "You always pass failure on the way to success.",
    source: "Mickey Rooney",
    year: "1976",
  },
  {
    quote: "Live up to your potential instead of imitating someone else's.",
    source: "Martha Burgess",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}
console.log(getRandomQuote());
/***
 * `printQuote` function

 ***/

function printQuote() {
  // Created a variable that calls the getRandomQuote() function
  let currentQuote = getRandomQuote();
  // Created a variable that initiatees my HTML string with the first two <p></p> elements, their classNames, and the quote and source properties, but leave off the second closing '<p>'
  let html = "<p class='quote'> " + currentQuote.quote + "</p>";
  html += "<p class='source'> " + currentQuote.source;

  // Used an if statement to check if the citation property exists, and if it does, concatenate a <span></span> element, apprropriate className, and citation property to the HTML string
  if ("citation" in currentQuote) {
    html += "<span class='citation'> " + currentQuote.citation + "</span>";
  }

  // Used an if statement to check of the year property exists, and if it does, concatenate a <span></span> element, appropriate className, and citation property to the HTML string

  // Both statements have been added to the html string
  if ("year" in currentQuote) {
    html += "<span class='year'> " + currentQuote.year + "</span>";
  }
  // Set the innerHTML of the quote-box div to equal the complete HTML string
  document.getElementById("quote-box").innerHTML = html;
}
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
// This is to listen to a click. The id tag for the click button is "load-quote." When the event listener hears a click, it makes the printQuote function to true.
document.getElementById("load-quote").addEventListener("click", printQuote, false);
