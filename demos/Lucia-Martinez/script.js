// Configuración del botón de WhatsApp
function setupWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // ⚠️ IMPORTANTE: Reemplaza con el número de WhatsApp
    // Formato: código país + número sin + ni espacios
    // Ejemplos:
    // - Argentina: 5491123456789
    // - México: 5215512345678
    // - Colombia: 573001234567
    const phoneNumber = 'TU_NUMERO_AQUI'; // 🔴 CAMBIAR ESTO con el número de WhatsApp
    
    // Mensaje predefinido
    const message = encodeURIComponent('Hola 👋 vi tu página web y me gustaría agendar una consulta.');
    
    // URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    if (whatsappBtn) {
        whatsappBtn.href = whatsappUrl;
        whatsappBtn.target = '_blank';
        whatsappBtn.rel = 'noopener noreferrer';
    }
}

// Navegación móvil
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Smooth scroll para enlaces internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajuste para navbar fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ Acordeón
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los demás
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle del item actual
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Manejo de imágenes - Las imágenes ahora están directamente en el HTML
function setupImages() {
    // Las imágenes se cargan directamente desde el HTML
    // Esta función se mantiene por compatibilidad pero no es necesaria
}

// Carrusel de Testimonios
function setupTestimonialsCarousel() {
    const carousel = document.getElementById('testimonialsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!carousel || !prevBtn || !nextBtn || !dotsContainer) return;
    
    const cards = carousel.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    const totalCards = cards.length;
    
    // Crear dots
    cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Ir al testimonio ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 30;
        const scrollPosition = currentIndex * (cardWidth + gap);
        
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Actualizar botones
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalCards - 1;
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto-play opcional (cada 5 segundos)
    let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // Pausar auto-play al hacer hover
    const carouselWrapper = carousel.closest('.testimonials-carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        carouselWrapper.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Inicializar
    updateCarousel();
    
    // Actualizar en resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCarousel();
        }, 250);
    });
}

// Animación al hacer scroll
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar elementos animables
    const animatableElements = document.querySelectorAll(
        '.service-card, .approach-item, .step-item'
    );
    
    animatableElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setupWhatsAppButton();
    setupMobileMenu();
    setupNavbarScroll();
    setupSmoothScroll();
    setupFAQ();
    setupImages();
    setupTestimonialsCarousel();
    setupScrollAnimations();
});
