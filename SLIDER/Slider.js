document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let currentIndex = 0;
    const PHOTOS_LIMIT = 10;
    let totalPhotos = 0;

    function fetchPhotos() {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${totalPhotos}&_limit=${PHOTOS_LIMIT}`)
            .then(response => {
                response.data.forEach(photo => {
                    const slide = document.createElement('div');
                    slide.classList.add('slide');
                    slide.innerHTML = `
                        <img src="${photo.url}" alt="${photo.title}">
                        <p class="description">${photo.title}</p>
                    `;
                    slidesContainer.appendChild(slide);
                });
                totalPhotos += response.data.length;
                updateButtons();
            })
            .catch(error => console.error('Error fetching photos:', error));
    }

    function showSlide(index) {
        const slideWidth = slidesContainer.children[0].offsetWidth;
        slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalPhotos - 2;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
            updateButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalPhotos - 1) {
            currentIndex++;
            showSlide(currentIndex);
            updateButtons();
            if (currentIndex >= slidesContainer.children.length - 1 && totalPhotos < PHOTOS_LIMIT) {
                fetchPhotos();
            }
        }
    });

    fetchPhotos();
});
