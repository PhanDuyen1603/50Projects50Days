const panels = document.querySelectorAll('.bg-img')

panels.forEach(panel => {
  panel.addEventListener('click', () =>{
    removeActiveClass();
    panel.classList.add('active');
  })
});

function removeActiveClass(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  });
}