let navbar = document.querySelector('.main-navigation');
let menu = document.querySelector('.menu-toggle');
let main = document.querySelector('.main');
let header = document.querySelector('.site-header');

const menuLists = [
    {
        "id": "1",
        "ratings": 5,
        "name": "Fresh Chicken Veggies",
        "category": "breakfast",
        "calories": 120,
        "type": "Non-Veg",
        "persons": 2,
        "price": 499
    },
    {
        "id": "2",
        "ratings": 4.3,
        "name": "Grilled Chicken",
        "category": "breakfast",
        "calories": 80,
        "type": "Non-Veg",
        "persons": 1,
        "price": 359
    },
    {
        "id": "3",
        "ratings": 4,
        "name": "Paneer Noodles",
        "category": "lunch",
        "calories": 100,
        "type": "Veg",
        "persons": 2,
        "price": 149
    },
    {
        "id": "4",
        "ratings": 4.5,
        "name": "Chicken Noodles",
        "category": "lunch",
        "calories": 120,
        "type": "Non-Veg",
        "persons": 2,
        "price": 379
    },
    {
        "id": "5",
        "ratings": 5,
        "name": "Bread Boiled Egg",
        "category": "dinner",
        "calories": 120,
        "type": "Non-Veg",
        "persons": 2,
        "price": 99
    },
    {
        "id": "6",
        "ratings": 5,
        "name": "Immunity Dish",
        "category": "dinner",
        "calories": 120,
        "type": "Veg",
        "persons": 2,
        "price": 159
    }

],
menuDish = document.getElementById('menu-dish');

menu.addEventListener('click', () => {
    navbar.classList.toggle('toggled');
})

window.onscroll = () => {
    if(main.offsetTop < window.scrollY - 20){
        header.classList.add('sticky_head');
    }
    else {
        header.classList.remove('sticky_head');
    }
}


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        return `
        <div class="col-lg-4 col-12 dish-box-container" data-category="${item.category}">
            <div class="dish-box text-center">
                <div class="dish-img">
                    <img src="./images/dish/${item.id}.png" alt="${item.name}">
                </div>
                <div class="dish-ratings mb-4 fs-4">
                ${item.ratings} <i class="uil uil-star"></i>
                </div>
                <div class="dish-title px-3">
                    <h3 class="h3-title mb-3">${item.name}</h3>
                    <p class="text-black-50">${item.calories} Calories</p>
                </div>
                <div class="dish-info my-4 pb-4">
                    <ul>
                        <li>
                            <p>Type</p>
                            <b>${item.type}</b>
                        </li>
                        <li>
                            <p>Persons</p>
                            <b>${item.persons}</b>
                        </li>
                    </ul>
                </div>
                <div class="dish-bottom-row">
                    <ul>
                        <li>
                            <b>Rs. ${item.price}</b>
                        </li>
                        <li>
                            <button type="button" class="dish-add-btn">
                                <i class="uil uil-plus"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    });
    displayMenu = displayMenu.join('');
    menuDish.innerHTML = displayMenu;
}

function displayItems() {
    const filterBtns = document.querySelectorAll('.filter');

    filterBtns.forEach((filterBtn) => {
        filterBtn.addEventListener('click', (e) => {
            const category = e.target.dataset.filter || e.target.parent;
            const menuCategory = menuLists.filter(function(menuItem){
                if(menuItem.category == category){
                    return menuItem;
                }
            });
            if(category == 'all'){
                displayMenuItems(menuLists);
            }
            else {
                displayMenuItems(menuCategory);
            }
        })
    })
    console.log(filterBtns);
}

displayMenuItems(menuLists);
displayItems();

let swiper = new Swiper('.book-table-img-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 2000,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 3,
      stretch: 2,
      depth: 100,
      modifier: 5,
      slideShadows: false,
    },
    loopAddition: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true    
    }
})