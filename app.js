

const headline = document.querySelector('.hero h1');
const text = headline.textContent;
const masteryPeak = headline.querySelector('.text-primary');
headline.textContent = '';

let index = 0;
function type() {
    if (index < text.length) {
        const char = text.charAt(index);
        if (char === '<') {
            const spanStart = text.indexOf('<', index);
            const spanEnd = text.indexOf('>', index);
            const span = text.slice(spanStart, spanEnd + 1);
            headline.innerHTML += span;
            index = spanEnd + 1;
        } else {
            headline.textContent += char;
            index++;
        }
        setTimeout(type, 100);
    }
}

type();
const sections = document.querySelectorAll('section');




const courses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        category: "Web",
        price: '5.00',
        img: "images/img13.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications',
        rating: 4.5
    },
    {
        id: 2,
        title: "Web Dev Bootcamp",
        category: "Web",
        price: 10.50,
        img: "images/img5.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications',
        rating: 4.3
    },



    {
        id: 3,
        title: "Web Development for Beginners",
        category: "Web",
        price: 13.99,
        img: "./images/img7.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications',
        rating: 4.3
    },
    {
        id: 4,
        title: "Java Complete for Complete Begginer",
        category: "Java",
        price: 6.99,
        img: "./images/img8.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications',
        rating: 4.3
    },
    {
        id: 5,
        title: "Java from Zero to Hero",
        category: "Java",
        price: 20.99,
        img: "./images/img14.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications',
        rating: 4.3
    },
    {
        id: 6,
        title: "Java Bootcamp",
        category: "Java",
        price: 22.99,
        img: "./images/img9.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications',
        rating: 4.3
    },
    {
        id: 7,
        title: "Python Bootcamp 2024",
        category: "Python",
        price: 18.99,
        img: "./images/img12.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications ',
        rating: 4.3
    },
    {
        id: 8,
        title: "Python Nuggets",
        category: "Python",
        price: 8.99,
        img: "./images/img16.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        rating: 4.3
    },
    {
        id: 9,
        title: "Learn Python",
        category: "Python",
        price: 12.99,
        img: "./images/img3.jpg",
        desc: ' Learn the essential skills for building modern websites and web applications ',
        rating: 4.3
    },
    {
        id: 10,
        title: "React Mastery 2024",
        category: "React",
        price: 16.99,
        img: "./images/img4.jpg",
        desc: `Learn the essential skills for building modern websites and web applications`,
        rating: 4.3
    },
    {
        id: 11,
        title: "React for Complete Beginners",
        category: "React",
        price: 22.99,
        img: "./images/img6.jpg",
        desc: `Learn the essential skills for building modern websites and web applications`,
        rating: 4.3
    },

    {
        id: 13,
        title: "AI Mastery 2024",
        category: "AI",
        price: 16.99,
        img: "./images/img8.jpg",
        desc: `Learn the essential skills for building modern websites and web applications`,
        rating: 4.3
    },
    {
        id: 14,
        title: "AI for Complete Beginners",
        category: "AI",
        price: 22.99,
        img: "./images/img10.jpg",
        desc: `Learn the essential skills for building modern websites and web applications`,
        rating: 4.3
    },
    {
        id: 15,
        title: "Web Development for Beginners",
        category: "Web",
        price: 13.99,
        img: "./images/img11.jpg",
        desc: 'Learn the essential skills for building modern websites and web applications',
        rating: 4.3
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    displayItems(courses);
    displayInitialItems();
    displayButtons();
});
function displayRating(rating) {
    const starsTotal = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStars = starsTotal - filledStars - halfStar;

    let starsHTML = '';
    for (let i = 0; i < filledStars; i++) {
        starsHTML += '<i class="bi bi-star filled"></i>';
    }
    if (halfStar) {
        starsHTML += '<i class="bi bi-star-half"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="bi bi-star"></i>';
    }

    return `
        <div class="stars-outer">
            ${starsHTML}
        </div>
    `;
}

function displayItems(Items) {
    let displayMenu = Items.map(function (item) {
        return `
                <div class="col-md-6 col-lg-3 col-sm-6">
                    <div class="card mb-4">
                        <img src="${item.img}" class="card-img-top" alt="${item.title}">
                        <div class="card-body text-center">
                            <header>
                                <h4>${item.title}</h4>
                                <h4 class="price">$${item.price}</h4>
                            </header>
                            <p class="item-text">${item.desc}</p>
                            <div class="course-rating">
                              <i class="bi bi-star-fill"></i>
                             <i class="bi bi-star-fill"></i>
                             <i class="bi bi-star-fill"></i>
                             <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                                <span class = 'star'>${item.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
        ;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = `<div class="row">${displayMenu}</div>`;
}



function displayButtons() {
    const categories = courses.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    // console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const courseCategory = courses.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayItems(courses);
            } else {
                displayItems(courseCategory);
            }
        });
    });
}
function displayInitialItems() {
    const initialItems = courses.slice(0, 4);
    displayItems(initialItems);
    sectionCenter.insertAdjacentHTML("afterend", '<button class="view-more-btn">View More</button>');

    const viewMoreBtn = document.querySelector(".view-more-btn");
    viewMoreBtn.addEventListener("click", function () {
        displayItems(courses);
        viewMoreBtn.style.display = "none";
    });
}


