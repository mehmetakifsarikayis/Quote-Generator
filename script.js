const quote_element = document.getElementById("quote");
const author_element = document.getElementById("author");
const new_quote_element = document.getElementById("new-button");
const twitter_element = document.getElementById("twitter");

const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

let apiQuotes = [];
fetch(apiUrl)
  .then((response) => response.json())
  .then((res) => (apiQuotes = res))
  .then(() => Change_Quote());

const Change_Quote = () => {
  console.log(apiQuotes);
  let new_quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (new_quote.text.length > 50) {
    quote_element.classList.add("long-quote");
  } else {
    quote_element.classList.remove("long-quote");
  }
  quote_element.innerText = new_quote.text;
  author_element.innerText = new_quote.author;
};

function TweetQuote() {
  let twitterUrl = `https://twitter.com/intent/tweet?text=${quote_element.textContent}-${author_element.textContent}`;
    window.open(twitterUrl,"_blank");
}

new_quote_element.addEventListener("click", Change_Quote);
twitter_element.addEventListener("click",TweetQuote);