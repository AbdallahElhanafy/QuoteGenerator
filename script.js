let quotesBox = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        writer: '― Oscar Wilde '
    },
    {
        quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        writer: '―  Albert Einstein  '
    },
    {
        quote: 'So many books, so little time.',
        writer: '― Frank Zappa  '
    },
    {
        quote: 'A room without books is like a body without a soul',
        writer: '― Marcus Tullius Cicero  '
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        writer: '― Mae West  '
    },
    {
        quote: 'Be the change that you wish to see in the world.',
        writer: '― Mahatma Gandhi  '
    },
    {
        quote: 'If you tell the truth, you don\'t have to remember anything.',
        writer: '― Mark Twain  '
    },
    {
        quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
        writer: '― Oscar Wilde '
    },
    {
        quote: 'Without music, life would be a mistake.',
        writer: '―  Friedrich Nietzsche '
    },
    {
        quote: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        writer: '― Mark Twain  '
    },
    {
        quote: 'As he read, I fell in love the way you fall asleep: slowly, and then all at once.',
        writer: '― John Green '
    },
    {
        quote: 'The fool doth think he is wise, but the wise man knows himself to be a fool.',
        writer: '― William Shakespeare '
    },
    {
        quote: 'Life is what happens to us while we are making other plans.',
        writer: '― Allen Saunders  '
    },
]



function addQuote() {

    let randomQuote = Math.floor(Math.random() * quotesBox.length)
    document.getElementById('quote').innerHTML = quotesBox[randomQuote].quote
    document.getElementById('writer').innerHTML = quotesBox[randomQuote].writer
    quotesBox.splice(randomQuote, 1);
}