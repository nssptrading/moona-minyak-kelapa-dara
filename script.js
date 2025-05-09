const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
const backToTopButton = document.querySelector('.back-to-top');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
});

document.querySelectorAll('.main-nav a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
}));

// Show/hide the "Back to Top" button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // Close any other open answers
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                otherAnswer.classList.remove('open');
                otherQuestion.classList.remove('open'); // Also remove 'open' class from question if you are using it for styling
            }
        });

        // Toggle the current answer and question state
        answer.classList.toggle('open');
        question.classList.toggle('open'); // Toggle 'open' class on question for styling purposes
    });
});

const socialSidebar = document.querySelector('.social-sidebar');

// Show/hide the social media sidebar based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        socialSidebar.classList.add('show');
    } else {
        socialSidebar.classList.remove('show');
    }
});
