// Smooth reveal animation for cards when they enter viewport
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    observer.observe(card);
});

// Parallax effect enhancement
const parallaxContainer = document.querySelector('.parallax-container');
const layers = document.querySelectorAll('.parallax-layer');
const header = document.querySelector('.header');

parallaxContainer.addEventListener('scroll', () => {
    const scrolled = parallaxContainer.scrollTop;
    
    // Fade out header text based on scroll position
    const headerOpacity = 1 - (scrolled / (window.innerHeight / 2));
    header.style.opacity = Math.max(0, headerOpacity);
    
    // Add subtle rotation to layers based on scroll
    layers.forEach(layer => {
        const speed = layer.style.transform.includes('-15px') ? 0.01 :
                     layer.style.transform.includes('-10px') ? 0.02 :
                     layer.style.transform.includes('-5px') ? 0.03 : 0.04;
        
        const rotate = scrolled * speed;
        const currentTransform = layer.style.transform.split(' ')[0];
        layer.style.transform = `${currentTransform} rotate(${rotate}deg)`;
    });
});
