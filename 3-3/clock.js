//Javascript Document.


const ClockBox = document.querySelector(".js-clock"),
        ClocklTitle = ClockBox.querySelector("h1");


function getTime(){
    const ToDay = new Date();
    const Hours = ToDay.getHours();
    const Minutes = ToDay.getMinutes();
    const Seconds = ToDay.getSeconds();
    ClocklTitle.innerText = 
    `${Hours<10 ? `0${Hours}`: Hours}:${
        Minutes<10? `0${Minutes}`: Minutes}:${
            Seconds<10? `0${Seconds}` : Seconds}`
    
    setInterval(getTime,1000);
}

getTime();