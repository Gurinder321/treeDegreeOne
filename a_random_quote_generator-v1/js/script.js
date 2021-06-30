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

const quotes = [
  {
    quote: "The greatest thing in the world is to know how to belong to oneself.",
    source: "Michel de Montaigne",
    year: 1991,
  },
  {
    quote: "Woe be to him that reads but one book.",
    source: "George Herbert",
    year: 1993,
  },
  {
    quote: "Love has no place in a lawyer's office.",
    source: "Elizabeth Aston",
    year: 1994,
  },
  {
    quote: "There's always one who loves and one who lets himself be loved.",
    source: "W. Somerset Maugham",
    year: 1995,
  },
  {
    quote: "Paradise is exactly like where you are right now... only much, much better.",
    source: "Laurie Anderson",
    year: 1999,
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 * I understood up until this section. I used a resoucrse online belonging to https://codepen.io/LeeVaughn/pen/eMQLGm?editors=0010. I only used what was essentials.
 ***/

function printQuote() {
  // This makes our function into a variable so it's easy to use
  let currentQuote = getRandomQuote();
  // This lets us update the classes with JS with the text we want
  let html = "<p class='quote'>" + currentQuote.quote + " </p>";
  html += "<p class='source'> " + currentQuote.source + ", " + currentQuote.year + " </p>";
  // This line (line: 58) I'm totally confused about
  document.getElementById("quote-box").innerHTML = html;
}
// Why are we calling the function here?
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
// This is to listen to a click. The id tag for the click button is "load-quote." When the event listener hears a click, it makes the printQuote function to true.
document.getElementById("load-quote").addEventListener("click", printQuote, false);
