const clockEl = document.querySelector('.clock');
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time')
const toggle = document.querySelector('.toggle');
const minuteEl = document.querySelector('minute');
const secondEl = document.querySelector('.second');
const clockContainer = document.querySelector('.clock-container');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML ='Dark mode';
    }
    else{
        html.classList.add('dart');
        e.target.innerHTML = 'Light mode';
    }
})

function setTime(){
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hour = time.getHours();
    //const hoursClocks = hours >= 13 ? hours % 13 :hours;
    return `${hour}:${minutes}:${seconds}`;
}

function updateTime(){
    timeEl.innerHTML = setTime();
    secondEl.style.transform = `rotate(20deg)`
}

setInterval(updateTime ,1000)

