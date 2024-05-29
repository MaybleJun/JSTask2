document.addEventListener('DOMContentLoaded', function () {
    const arrowUp = document.getElementById('arrow-up');


    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
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
