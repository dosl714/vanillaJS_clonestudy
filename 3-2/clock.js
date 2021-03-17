//Javascript Document.

const ClockContainer = document.querySelector(".js-clock"),
        ClockTitle = ClockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const Minutes = date.getMinutes();
    const Hours = date.getHours();
    const seconds = date.getSeconds();
    ClockTitle.innerText = `${Hours < 10 ? `0${Hours}`: Hours
    }:${
        Minutes<10 ? `0${Minutes}`:Minutes
    }: ${
        seconds <10 ? `0${seconds}`:seconds
    }`;
    
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();