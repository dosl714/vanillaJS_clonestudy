//Javascript Document

const JsClock = document.querySelector(".js-clock"),
        JsClockTitle = JsClock.querySelector("h1");

function getTime(){
    const ToDay= new Date();
    const Hours = ToDay.getHours();
    const minutes = ToDay.getMinutes();
    const Seconds =ToDay.getSeconds();

    JsClockTitle.innerText = `${Hours<10 ? `0${Hours}` : Hours}:${
        minutes <10 ? `0${minutes}` : minutes}:${
            Seconds<10 ? `0${Seconds}` : Seconds}`;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}
init();