document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    const itemList = document.querySelector('.item-list');

    searchButton.addEventListener('click', function () {
        const searchText = searchInput.value.toLowerCase();
        const items = document.querySelectorAll('.item');

        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    const form = document.querySelector('.lost-found-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const itemName = form.querySelector('input[placeholder="Item Name"]').value;
        const location = form.querySelector('input[placeholder="Location (Where it was lost/found)"]').value;
        const description = form.querySelector('textarea[placeholder="Description (Color, Size, Brand, etc.)"]').value;

        if (itemName && location && description) {
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `<strong>📍 ${itemName}</strong> – ${location}, ${description}`;

            itemList.insertBefore(newItem, itemList.firstChild);

            form.querySelector('input[placeholder="Item Name"]').value = '';
            form.querySelector('input[placeholder="Location (Where it was lost/found)"]').value = '';
            form.querySelector('textarea[placeholder="Description (Color, Size, Brand, etc.)"]').value = '';
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });
});
