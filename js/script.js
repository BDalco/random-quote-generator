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
  { quote:'Nobody puts Baby in a corner.', source:'Johnny Castle', citation:'Dirty Dancing', year:'1987' },
  { quote:'Hail to the king, baby.', source:'Ash Williams', citation:'Army of Darkness', year:'1992' },
  { quote:'Yeah, well, that\'s just, like, your opinion, man.', source:'The Dude', citation:'The Big Lebowski', year:'1998' },
  { quote:'You either die a hero or live long enough to see yourself become the villain.".', source:'Harvey Dent', citation:'The Dark Knight', year:'2008' },
  { quote:'I\'m going to make him an offer he can\'t refuse.', source:'Vito Corleone', citation:'The Godfather', year:'1972' },
  { quote:'You\'re killing me, Smalls!', source:'Hamilton "Ham" Porter', citation:'The Sandlot', year:'1993' },
  { quote:'You can\'t handle the truth!', source:'Colonel Nathan R. Jessup', citation:'A Few Good Men', year:'1992' },
  { quote:'Keep your friends close, but your enemies closer.', source:'Michael Corleone', citation:'The Godfather Part II ', year:'1974' },
  { quote:'I feel the need, the need for speed.', source:'Maverick', citation:'Top Gun', year:'1986' },
  { quote:'There\'s no crying in baseball!', source:'Jimmy Dugan', citation:'A League of Their Own', year:'1992' },
  { quote:'Life moves pretty fast. If you don\'t stop and look around once in a while, you could miss it.', source:'Ferris Bueller', citation:'Ferris Bueller\'s Day Off', year:'1983' }
]

/***
 * `getRandomQuote` function
 * Generates the random quote number and returns it
***/

function getRandomQuote() {
  // Generates the random quote number
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

  // Gets your random quote
  for ( let i = 0; i < quotes.length; i++ ) {
    const randomQuote = quotes[randomQuoteIndex];
    return randomQuote;
  }

}

/***
 * `printQuote` function
 * Generates the quote and appends it to the HTML
***/

function printQuote() {
  // Gets the random quote from the getRandomQuote function
  const randomQuote = getRandomQuote();

  // Storing the data in a template literal to save out to the HTML
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`

  // Checking if there is a citation in the quote
  if ( randomQuote.hasOwnProperty('citation') ) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }

  // Checking if there is a year in the quote
  if ( randomQuote.hasOwnProperty('year') ) {
    html += `<span class="year">${randomQuote.year}</span>`
  }

  html += `</p>`

  // Assigning the HTML to the quote-box
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);