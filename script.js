// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
    this.classList.toggle('open');
});

// Profile image interactivity
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    let isOriginal = true;
    const originalSrc = profileImage.src;
    const traditionalSrc = 'images/traditional.jpg';
    
    profileImage.addEventListener('click', function() {
        if (isOriginal) {
            this.src = traditionalSrc;
            this.alt = "Treezer in traditional Luo attire";
        } else {
            this.src = originalSrc;
            this.alt = "Treezer Hellen";
        }
        isOriginal = !isOriginal;
    });
}

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skillLevels = document.querySelectorAll('.skill-level');
    if (skillLevels.length > 0) {
        skillLevels.forEach(bar => {
            const percent = bar.getAttribute('data-level');
            bar.style.setProperty('--width', percent + '%');
        });
    }
};

// Initialize animations
window.addEventListener('load', animateSkillBars);
window.addEventListener('scroll', animateSkillBars);

// Make recipe cards clickable
document.querySelectorAll('.recipe-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        window.location.href = this.getAttribute('onclick').split("'")[1];
    });
});

// Add animation to skill bars
document.querySelectorAll('.skill-level').forEach(bar => {
    const percent = bar.parentElement.getAttribute('data-level');
    bar.style.width = percent + '%';
});