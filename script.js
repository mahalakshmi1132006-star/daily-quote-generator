const quotes = [
  "Believe in yourself.",
  "Every day is a new chance.",
  "Dream big and work hard.",
  "Small steps lead to big success.",
  "Never give up.",
  "Your future starts today.",
  "Stay positive and keep learning.",
  "Success comes with practice."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
