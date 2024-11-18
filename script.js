// script.js

// Custom Greeting
function displayGreeting() {
  const nameInput = document.getElementById("name-input");
  const welcomeText = document.getElementById("welcome-text");
  const userName = nameInput.value;

  if (userName) {
    welcomeText.innerText = `Welcome to Javascript!, ${userName}!`;
  } else {
    welcomeText.innerText = 'please enter your name!';
  }
}


// Toggle Switch
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (body.classList.contains("dark-theme")) {
    themeToggleBtn.innerText = "Switch to Light Theme";
  } else {
    themeToggleBtn.innerText = "Switch to Dark Theme";
  }
}



// Random Quote Generator
const quotes = [
  "Good things are coming!",
  "Live in the moment!",
  "Art is everywhere!",
  "Javascript is the language of the web!",
  "Coding is fun!",
];

function displayRandomQuote(){
  const RandomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-display").innerText = quotes[RandomIndex];
}

// Typing Animation for Welcome Text
const welcomeMessage = "Welcome to JavaScript!";
let index = 0;

function typeText() {
  const textElement = document.getElementById("typing-text");
  textElement.innerText = welcomeMessage.slice(0, index);

  index++;
  if (index <= welcomeMessage.length) {
  setTimeout(typeText, 150);
  }
}

window.onload = typeText;