const quotes = [
    {
        quote: "Give me all your time 'cause I can't hide",
        title: "LURE",
    },
    {
        quote: "Bust it down for my life like it's last time",
        title: "Bust it",
    },
    {
        quote: "XOX, I've been thinking 'bout you and I bet you know this",
        title: "XO",
    },
    {
        quote: "Waving on the sky Movin', touchin' all the time",
        title: "Skyline",
    },
    {
        quote: "Replay, replay, I'm stuck in my loop",
        title: "MMI",
    },
    {
        quote: "Do you feel the same as me, I'm lonely",
        title: "nbdy",
    },
]

const quote = document.querySelector("#quote span:first-child");
const title = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * 6)];

quote.innerText = todaysQuote.quote;
title.innerText = todaysQuote.title;
