const btn = document.querySelector(".btn");
  
    // Listen for click event
    btn.addEventListener('click',function (e) {
        console.log('helo');
        // Create span element
        let ripple = document.createElement("span");
  
        // Add ripple class to span
        let x = e.clientX - e.target.offsetLeft;
  
        // Get position of Y 
        let y = e.clientY - e.target.offsetTop;
  
        // Position the span element
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        // Add span to the button 
        this.appendChild(ripple);
  
        // Get position of X
        
  
        // Remove span after 0.3s
            setTimeout(() => {
                ripple.remove();
            }, 1000);
  
    }) 