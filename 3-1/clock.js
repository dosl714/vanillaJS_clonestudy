//Javascript Document.

const JsClk = document.querySelector(".clk"),
      ClkTitle= document.querySelector("h1");

function getTimes(){
    const ToDay = new Date();
    const Year = ToDay.getFullYear();
    const Hours = ToDay.getHours();
    const Minutes = ToDay.getMinutes();
    const Seconds = ToDay.getSeconds();
    
    ClkTitle.innerText=`${Hours}:${Minutes}:${Seconds}`;
}
getTimes();