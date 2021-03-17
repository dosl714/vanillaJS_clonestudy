//Javascript Document

/*const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");*/

//코드를 좀더 깔끔하게 쓰고 싶다면
const clockContainer = document.querySelector(".js-clock"),
        clockTitle = clockContainer.querySelector("h1");

//시간을 불러올 함수를 만들자!
function getTime() {
    const date = new Date(); //여기서  date 는 calss!
    const minutes = date.getMinutes();
    const Hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${Hours}:${minutes}:${seconds}`;
//innerText는 객체 안에 텍스트를 넣기 위해 사용. 백틱을 쓴다.
}
getTime();
function init( ) {
    
}
init();