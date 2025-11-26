// Testimonial Slider Script
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.getElementById('sliderContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    const cards = document.querySelectorAll('.testimonial-card');
    
    let currentIndex = 0;
    const totalSlides = cards.length;

    // Initialize slider
    function init() {
        // Create dots
        createDots();
        
        // Show first slide
        showSlide(0);
        
        // Add event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
        
        // Touch support
        let touchStartX = 0;
        let touchEndX = 0;
        
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
    }

    // Create dots indicator
    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Show specific slide
    function showSlide(index) {
        // Remove active class from all cards
        cards.forEach(card => card.classList.remove('active'));
        
        // Add active class to current card
        cards[index].classList.add('active');
        
        // Update dots
        updateDots(index);
        
        // Update current index
        currentIndex = index;
    }

    // Update dots indicator
    function updateDots(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            showSlide(index);
        }
    }

    // Previous slide
    function prevSlide() {
        const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        showSlide(newIndex);
    }

    // Next slide
    function nextSlide() {
        const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
        showSlide(newIndex);
    }

    // Keyboard navigation
    function handleKeyboard(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    }

    // Auto-play (optional - commented out by default)
    /*
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play
    startAutoPlay();
    
    // Pause on hover
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
    */

    // Initialize
    init();
});
