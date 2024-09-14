document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const screenPos = window.innerHeight / 1.3;

        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;

            if (sectionPos < screenPos) {
                section.classList.add('fade-in');
            }
        });
    });
});
