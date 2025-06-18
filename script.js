document.addEventListener('DOMContentLoaded', function() {
    // Button hover effects
    const buttons = document.querySelectorAll('.nav-btn, .subject-btn');
    
    buttons.forEach(button => {
        // Set button color from data attribute
        const color = button.getAttribute('data-color');
        if (color) {
            button.style.backgroundColor = color;
            
            // Add hover effect
            button.addEventListener('mouseenter', () => {
                button.style.filter = `brightness(${100 + parseInt(button.getAttribute('data-hover-brightness') || 15}%)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.filter = 'brightness(100%)';
            });
        }
        
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Page load animation
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
});