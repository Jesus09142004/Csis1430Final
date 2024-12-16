
const quotes = [
    "I'm Ready, I'm Ready, I'm Ready! - Spongebob",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. - Bill Gates",
    "Now I am become Death, the destroyer of worlds - Oppenheimer",
    "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein"
];

const generateButton = document.getElementById('generate-quote');
const quoteDisplay = document.getElementById('quote-display');
const quoteAudio = document.getElementById('quote-audio');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteDisplay.querySelector('.quote-text').textContent = selectedQuote;

    quoteAudio.currentTime = 0; 
    quoteAudio.play();
}

generateButton.addEventListener('click', generateQuote);