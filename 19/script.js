const clockEl = document.getElementsByClassName('.clock');
const dateEl = document.querySelector('.date');
const timeEl = document.getElementsByClassName('.time');
const toggle = document.querySelector('.toggle');
const minuteEl = document.querySelector('minute');
const secondEl = document.querySelector('.second')

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
   
    const month = time.getMonth();
    console.log(month);
    const date = time.date();
    const day = time.day();
    const hours = time.getHours();
    const hoursClocks = hours >= 13 ? hours % 13 :hours;


}

console.log(time);


