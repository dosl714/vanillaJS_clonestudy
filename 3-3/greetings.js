//Javascript Document.

const form = document.querySelector(".js-clock"), //form 을 불러옴
        input = form.querySelector("input"),// form 안의 input tag를 불러옴
        greeting = document.querySelector(".js-greeting"); //greeting을 가져옴


const USER_LS = "currenetUser", //왜 여기 변수를 또 선언 하는가?
    SHOWING_CN = "showing";

function paintGreeting(text){ // currenUSer가 null이 아닐경우 이름을 칠하기 위한 함수 생성, text라는 1개의 어규먼트를 갖는다.
    form.classList.remove(SHOWING_CN); //색을 칠하기 위해 폼을 숨기기
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currenetUser = localStorage.getItem(USER_LS); //나에게 값을 줄것임.
    
    if(currenetUser === null ) {//currenetUser 가 null인경우.

    }else {//currenetUser 가 null이 아닌 경우.
        paintGreeting();
    }
}

function init(){
    loadName();
}
init();