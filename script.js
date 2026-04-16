document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const langBtn = document.getElementById('lang-toggle');
    const body = document.body;
    const jaText = document.querySelector('.ja-text');
    const enText = document.querySelector('.en-text');

    let currentLang = 'ja';
    body.setAttribute('data-lang', currentLang);

    langBtn.addEventListener('click', () => {
        body.style.opacity = '0';
        
        setTimeout(() => {
            if (currentLang === 'ja') {
                currentLang = 'en';
                enText.classList.add('active-lang');
                jaText.classList.remove('active-lang');
            } else {
                currentLang = 'ja';
                jaText.classList.add('active-lang');
                enText.classList.remove('active-lang');
            }
            body.setAttribute('data-lang', currentLang);
            body.style.opacity = '1';
            
            // Trigger scroll event to ensure items are revealed properly after language change
            revealOnScroll();
        }, 300);
    });
});
