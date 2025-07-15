let searchBtn = document.getElementById('search');
let searchText = document.getElementById('searchText').value;
let clearBtn = document.getElementById('clear');
let text = searchText.toLowerCase();


function showRecommendation(event) {
    event.preventDefault();
    const url = './travel.json';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const searchDisplay = document.getElementById('searchDisplay');
            searchDisplay.innerHTML = '';
            let items = '';
            if (text === 'countries') {
                data.countries.forEach(country => {
                    items.push(...country.cities);
                });
            }
            else if (text === 'beaches') {
                items = data[beaches];
            }
            else if (text === 'templates') {
                items = data['templates'];
            }
            if (items.length === 0) {
                searchDisplay.innerHTML = '<p>No items found for this category</p>';
                return;
            }
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                item.className = 'item';

                const img = Document.createElement('img');
                img.src = item.imageUrl;
                img.alt = item.name;

                const h2 = document.createElement('h2');
                h2.textContent = item.name;

                const p = document.createElement('p');
                p.textContent = item.description;

                itemDiv.appendChild(img);
                itemDiv.appendChild(h2);
                itemDiv.appendChild(p);

                searchDisplay.appendChild(itemDiv);
            }) 
        .catch(error) {
            console.error('Could not fetch or render the data', error);
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    showRecommendation;
});

function searchButton(event) {
    
    event.preventDefault();
}