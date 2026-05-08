const compliments = [
    "Твой талант — это то, что меня покорило",
    "Обожаю, когда ты увлечена рисованием",
    "Ты — самый красивый арт в моей жизни",
    "Твои руки творят магию",
    "Я всегда на твоей стороне, что бы ты ни задумала",
    "Ты невероятная, помни об этом всегда ❤️"
];

const heartBtn = document.getElementById('heart-btn');
const compText = document.getElementById('compliment-text');

heartBtn.addEventListener('click', () => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    compText.style.opacity = 0;
    setTimeout(() => {
        compText.innerText = random;
        compText.style.opacity = 1;
    }, 300);
});

// Реализация появления при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Открытие модалки для фото
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('modal-img').src = img.src;
        document.getElementById('modal').style.display = 'flex';
    });
});

document.getElementById('modal').addEventListener('click', function() {
    this.style.display = 'none';
});