const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Everything you can imagine is real. – Pablo Picasso",
  "Act as if what you do makes a difference. It does. – William James",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Happiness is not by chance, but by choice. – Jim Rohn"
];

const quoteEl = document.getElementById('quote');
const buttonEl = document.getElementById('new-quote-btn');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function showQuote() {
  const newQuote = getRandomQuote();
  quoteEl.classList.remove('fade-in'); // Reset animation
  void quoteEl.offsetWidth; // Trigger reflow
  quoteEl.textContent = newQuote;
  quoteEl.classList.add('fade-in');
}

buttonEl.addEventListener('click', showQuote);

// Show a quote on first load
showQuote();
