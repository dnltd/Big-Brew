document.querySelectorAll('.carousel').forEach(carousel => {
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const carouselImages = carousel.querySelector('.carousel-images');
  
    let index = 0;
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    const itemWidth = items[0].offsetWidth;

    const showItem = () => {
        carouselImages.style.transform = `translateX(-${index * itemWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : totalItems - 1;
        showItem();
    });

    nextButton.addEventListener('click', () => {
        index = (index < totalItems - 1) ? index + 1 : 0;
        showItem();
    });

    showItem();
});

let bestSellerImages = document.querySelectorAll('.best-seller-item img');
let bestSellerIndex = 0;

setInterval(() => {
    bestSellerImages.forEach((img, i) => {
        img.style.opacity = (i === bestSellerIndex) ? 1 : 0;
    });
    bestSellerIndex = (bestSellerIndex + 1) % bestSellerImages.length;
}, 3000);

let newFlavorImages = document.querySelectorAll('.new-flavor-item');
let flavorIndex = 0;

setInterval(() => {
    newFlavorImages[flavorIndex].style.display = 'none';
    flavorIndex = (flavorIndex + 1) % newFlavorImages.length;
    newFlavorImages[flavorIndex].style.display = 'block';
}, 3000);

const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const sidebarLinks = sidebar.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuToggle.classList.remove('active');
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
