document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentMenuIndex = 0;

  function showMenuImage(index) {
    if (index < 0) {
      currentMenuIndex = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
      currentMenuIndex = 0;
    }

    carouselItems.forEach((item, i) => {
      item.classList.remove('active');
    });

    carouselItems[currentMenuIndex].classList.add('active');
  }

  showMenuImage(currentMenuIndex);

  prevButton.addEventListener('click', function () {
    currentMenuIndex--;
    showMenuImage(currentMenuIndex);
  });

  nextButton.addEventListener('click', function () {
    currentMenuIndex++;
    showMenuImage(currentMenuIndex);
  });

  const showoffImages = document.querySelectorAll('#showoff .showoff-item');
  let currentShowoffIndex = 0;

  function showNextShowoffImage() {
      showoffImages.forEach((img) => {
          img.style.opacity = '0'; 
          img.style.display = 'none'; 
      });

      currentShowoffIndex = (currentShowoffIndex + 1) % showoffImages.length;
      showoffImages[currentShowoffIndex].style.display = 'block';
      showoffImages[currentShowoffIndex].style.opacity = '1';
  }

  showoffImages.forEach((img, index) => {
      img.style.transition = 'opacity 1s ease-in-out'; 
      if (index !== currentShowoffIndex) {
          img.style.opacity = '0';
          img.style.display = 'none';
      } else {
          img.style.opacity = '1';
          img.style.display = 'block';
      }
  });

  setInterval(showNextShowoffImage, 2000);
});

const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

const sidebarLinks = sidebar.querySelectorAll('a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});
