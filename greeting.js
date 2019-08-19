// querySelector은 찾은 거의 첫번째만 가져옴 querySelectorAll은 전부다!!(arra y로)
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    toDoFormShowing = document.querySelector(".js-toDoForm");;

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
    
function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    //기본동작 하는 거 막아서, 인풋 치고 엔터 눌러도 새로고침 안됨
    event.preventDefault(); 
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
function paintName(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    toDoFormShowing.classList.add(SHOWING_CN);
    greeting.innerText = `hello ${text}`
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintName(currentUser); 
    }
}
function init(){
    loadName();
}

init();
