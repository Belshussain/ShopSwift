const searchInput = document.getElementById('searchInput');
const productsGrid = document.getElementById('productsGrid');

searchInput.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const productCards = productsGrid.getElementsByClassName('card');

    Array.from(productCards).forEach(function(card) {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
});
