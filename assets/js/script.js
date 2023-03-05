function mobileMenu() {
  const headerNavbar = document.querySelector('.header-navbar');
  const toggleMobileMenu = document.querySelector('.toggle-mobile-menu');

  function addActiveClass() {
    headerNavbar.classList.toggle('active');
    toggleMobileMenu.classList.toggle('active');
  }
  toggleMobileMenu.addEventListener('click', addActiveClass);
}

mobileMenu();

function hoverImage() {
  const hoverImages = document.querySelectorAll('.hover-image');

  function showImage(event) {
    hoverImages.forEach((image) => {
      image.style.opacity = 0;
    });
    event.currentTarget.style.opacity = 1;
  }
  hoverImages.forEach((hoverImage) => {
    hoverImage.addEventListener('mouseover', showImage);
  });

  hoverImages.forEach((hoverImage) => {
    hoverImage.addEventListener('mouseout', () => {
      hoverImages.forEach((image) => {
        image.style.opacity = 0;
      });
    });
  });

  hoverImages.forEach((hoverImage) => {
    hoverImage.style.opacity = 0;
  });
}
hoverImage();

function readMore() {
  const headMoreButton = document.querySelector('#read-more');
  const hiddenText = document.querySelector('.hidden-text');

  function showText(event) {
    event.preventDefault();
    hiddenText.classList.toggle('active');

    if (hiddenText.classList.contains('active')) {
      headMoreButton.innerHTML = `Read less`;
    } else {
      headMoreButton.innerHTML`Read more>`;
    }
  }
  headMoreButton.addEventListener('click', showText);
}
readMore();

function categoriesFilter() {
  const headlineTitle = document.querySelector('.headline h2');

  const buttonMostPopular = document.querySelector('#button-most-popular');
  const buttonBestSellers = document.querySelector('#button-best-sellers');
  const buttonLowestPrice = document.querySelector('#button-lowest-price');

  const contentMostPopular = document.querySelector('#content-most-popular');
  const contentBestSellers = document.querySelector('#content-best-sellers');
  const contentLowestPrice = document.querySelector('#content-lowest-price');

  buttonMostPopular.classList.add('active');
  contentMostPopular.classList.add('active');

  buttonMostPopular.addEventListener('click', () => {
    contentMostPopular.classList.add('active');
    contentBestSellers.classList.remove('active');
    contentLowestPrice.classList.remove('active');
    buttonMostPopular.classList.add('active');
    buttonBestSellers.classList.remove('active');
    buttonLowestPrice.classList.remove('active');
    headlineTitle.textContent = 'Most Popular';
  });

  buttonBestSellers.addEventListener('click', () => {
    contentBestSellers.classList.add('active');
    contentMostPopular.classList.remove('active');
    contentLowestPrice.classList.remove('active');
    buttonBestSellers.classList.add('active');
    buttonMostPopular.classList.remove('active');
    buttonLowestPrice.classList.remove('active');
    headlineTitle.textContent = 'Best Sellers';
  });

  buttonLowestPrice.addEventListener('click', () => {
    contentLowestPrice.classList.add('active');
    contentBestSellers.classList.remove('active');
    contentMostPopular.classList.remove('active');
    buttonLowestPrice.classList.add('active');
    buttonBestSellers.classList.remove('active');
    buttonMostPopular.classList.remove('active');
    headlineTitle.textContent = 'Lowest Price';
  });
}
categoriesFilter();
