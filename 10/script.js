// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// sounds.forEach(sound => {
//     const btn = document.createElement('button');
//     btn.classList.add('btn');

//     btn.innerText= sound;
//     btn.addEventListener('click', ()=>{
//         stopSound();
//         document.getElementById(sound).play();
//     })

//     document.getElementById('buttons').appendChild(btn);


// });

// function stopSound(){
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound);
//         song.pause();
//         song.currentTime = 0;
//     });

// }

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)
    generateJoke();

async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}


