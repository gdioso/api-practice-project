const btn = document.querySelector('#btn');

btn.addEventListener('click', getQuote);

async function getQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        const quoteContent = document.querySelector('.quote-content');
        const author = document.querySelector('.author');

        // Display quote content and author
        quoteContent.textContent = data.content;
        author.textContent = `— ${data.author}`;
    } catch (error) {
        console.error(error);
    }
}

// Run function once when page loads
getQuote();