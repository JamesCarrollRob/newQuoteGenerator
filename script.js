

const quotes = [
    {
        name: 'Marcus Aurelius',
        quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.'
    },

    {
        name: 'Plato',
        quote: 'If you do not take an interest in the affairs of your government, then you are doomed to live under the rule of fools.'
    },

    {
        name: 'Ho Chi Minh',
        quote: 'Today we should make poems including iron and steel And the poet should know how to lead an attack.'
    },

    {
        name: 'Friedrich Nietzsche',
        quote: 'There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them.'
    },

    {
        name: 'Marcus Aurelius',
        quote: 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.'
    },

    {
        name: 'Marcus Aurelius',
        quote: 'Death smiles at us all, but all a man can do is smile back.'
    },

    {
        name: 'Marcus Aurelius',
        quote: 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.'
    },
]


const bodyBc = document.querySelector('#bodyimg');
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
const autoBtn = document.querySelector('#auto');


quoteBtn.addEventListener('click', quoteAnimation);
autoBtn.addEventListener('click', autoDisplay);

function quoteAnimation () {
    $('.container').fadeOut(2000).fadeIn(2000);
    displayQuote();
    // bodyBc.style.background = "url(ho-chi-minh.jpg)";
    if (quoteAuthor.innerText === 'Marcus Aurelius')
    {
    bodyBc.style.background = "url(images/ruins.jpg)"; 
   }
    else if (quoteAuthor.innerText !== 'Marcus Aurelius') {
        bodyBc.style.background = 'url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg)';
    }
        
    // $('#quote').fadeOut(3000);
    // $('#quoteAuthor').fadeOut(3000);
    //    setTimeout(displayQuote(),
    //     5000);     
}

function autoDisplay () {
    for (i=0; i <= quotes.length; i++){
    let number = Math.floor(Math.random()*quotes.length);
    // setTimeout( function (){
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote; 
    // },1000);
 }
}

function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);
    setTimeout( function (){
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote; 
    },2000);
   
}






// $( document ).ready(function() {
//     $('#quoteBtn').click(function(){
//     $('h2').fadeIn(3000);
 
//     });
// });


// $( document ).ready(function quoteAnimation () {
    
//     $('#quoteBtn').click(function(){
//     $('#quote').fadeOut(3000).displayQuote().fadeIn(3000);
//     $('#quoteAuthor').fadeOut(3000).displayQuote().fadeIn(3000);
 
//     });
// });