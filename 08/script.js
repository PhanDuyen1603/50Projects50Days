// const left = document.querySelector('.left')
// const right = document.querySelector('.right')
// const container = document.querySelector('.container')

// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split(" ").map((letter, idx) =>`<span
    style="transition-delay:${idx*50}ms">${letter}</span>`)
});
