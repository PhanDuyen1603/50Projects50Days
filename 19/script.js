const clockEl = document.querySelector('.clock');
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time')
const toggle = document.querySelector('.toggle');
const minuteEl = document.querySelector('.minute');
const hourEl = document.querySelector('.hour');
const secondEl = document.querySelector('.second');
const circle = document.querySelector('.circle');
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
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
})

function setTime(){
    const time = new Date();
    const date = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hour = time.getHours();
    const hoursClocks = hour >= 13 ? hour % 12 :hour;
    console.log(hour);
    let dateNight;  
    if(hour<12) dateNight = 'AM'
    else dateNight = 'PM'
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,60,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)`
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour,0,12,0,360)}deg)`
    timeEl.innerHTML = `${hoursClocks}:${minutes}  ${dateNight}`;
    dateEl.innerHTML = `${days[day]},${months[month]}`
    circle.innerHTML = `${date}`
}   

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
setInterval(setTime ,1000)

