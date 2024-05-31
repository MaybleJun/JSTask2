document.addEventListener('DOMContentLoaded', function () {
    const arrowUp = document.getElementById('arrow-up');
    const firstTextLine = document.querySelector('#content p.text');

    window.addEventListener('scroll', function () {
        const rect = firstTextLine.getBoundingClientRect();
        
       rect.top < 0 ? arrowUp.style.display = 'block': arrowUp.style.display = 'none';

    });
     
    arrowUp.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    arrowUp.style.display = 'none';
});