let generate = document.getElementById("generate");
let quoteText = document.getElementById("quote");
let cite = document.getElementById("cite");

const randomQuotes = [
    {quote: 'Sending important messages via text is the coward’s way out. Don’t be the person who texts important messages. It’s rude, inconsiderate, and, yes, cowardly.', cite: 'Julie A., M.A. Ross and Judy Corcoran'},
    {quote: 'I live in company with a body, a silent companion, exacting and eternal.', cite: 'Eugene Delacroix'},
    {quote: "Success isn't permanent, and failure isn't fatal.", cite: "Mike Ditka"},
    {quote: "The quantity of civilization is measured by the quality of imagination.", cite: "Victor Hugo"},
    {quote: "Your theory is crazy, but it's not crazy enough to be true.", cite: "Niels Bohr"},
];

    generate.addEventListener('click', getRandomQuote2)

    function getRandomQuote2() {
        let index = Math.floor(Math.random() * randomQuotes.length);
        let randomQuote = randomQuotes[index].quote;
        let randomAuthor = randomQuotes[index].cite;
        console.log(`Quote: ${randomQuote} | Author: ${randomAuthor}`);
        quoteText.textContent = randomQuote;
        cite.textContent = randomAuthor;
};



