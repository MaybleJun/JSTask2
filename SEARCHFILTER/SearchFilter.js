function filterList() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('#item-list li');
    
    items.forEach((item) => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.indexOf(searchText) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.getElementById('search-input').addEventListener('input', filterList);
