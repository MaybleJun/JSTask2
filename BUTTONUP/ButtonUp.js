document.addEventListener('DOMContentLoaded', function () {
    const arrowUp = document.getElementById('arrow-up');
    const firstTextLine = document.querySelector('#content p.text');

    window.addEventListener('scroll', function () {
        const rect = firstTextLine.getBoundingClientRect();
        
        if (rect.top < 0) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }
    });

    arrowUp.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    arrowUp.style.display = 'none';
});
