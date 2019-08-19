const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
function getTime(){
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    clockTitle.innerText = `${hrs < 10 ? `0${hrs}`: hrs}:${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}

init();