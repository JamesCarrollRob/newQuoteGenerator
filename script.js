

const quotes = [
    {
    name: 'Marcus Aurelius',
    quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
    image: "url(images/marcus.jpg)"
    },

    {
    name: 'Plato',
    quote: 'If you do not take an interest in the affairs of your government, then you are doomed to live under the rule of fools.',
    image: "url(images/ruins.jpg)"
    },

    {
        name: 'Ho Chi Minh',
        quote: 'Today we should make poems including iron and steel And the poet should know how to lead an attack.',
        image: 'url(images/ho-chi-minh.jpg)'
    },

    {
        name: 'Friedrich Nietzsche',
        quote: 'There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them.',
        image: 'url(images/spooky.jpg)'
    },

    {
        name: 'Marcus Aurelius',
        quote: 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
        image: "url(images/marcus.jpg)"
    },

    {
        name: 'Marcus Aurelius',
        quote: 'Death smiles at us all, but all a man can do is smile back.',
        image: "url(images/marcus.jpg)"
    },

    {
        name: 'Marcus Aurelius',
        quote: 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
        image: "url(images/marcus.jpg)"
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
    
}

/*** function scrolls through quotes only */
function autoDisplay () {
    for (i=0; i <= quotes.length; i++){
    let number = Math.floor(Math.random()*quotes.length);
    
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    
    
 }
}

 /* Random quote function:
 generates quote from quote object and displays author background image
  */
function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);
    setTimeout( function (){
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote; 
    bodyBc.style.background = quotes[number].image; 
    },2000);
   
}

function renderTime(){
    var myDate = new Date();
    var year = myDate.getFullYear();
    if(year < 1000) {
        year +=1900
    }
    var day = myDate.getDay();
    var month =myDate.getMonth();
    var daym = myDate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    //Date end

    //Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24) {
            h = 0;
        } else if(h > 12) {
            h = h - 0;
        }

        if(h < 10) {
            h = "0" + h;
        }

        if(m < 10) {
            m = "0" + m;
        }

        if(s < 10) {
            s = "0" + s;
        }

        var myClock = document.getElementById("clockDisplay");
        myClock.textContent = "" +dayarray[day]+ "" +daym+ " " +monthArray[month]+ " " +year+ " | " +h+  ":" +m+ ":" +s;
        myClock.innerText = "" +dayarray[day]+ "" +daym+ " " +monthArray[month]+ " " +year+ " | " +h+  ":" +m+ ":" +s;

        setTimeout("renderTime()", 1000);
}
renderTime();






