$(document).ready(function () {
  $('.grid').imagesLoaded(function () {
    $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });

    const gridItems = document.querySelectorAll('.grid-item');

    const observerOptions = {
      threshold: 0.8, // Элемент виден на 20%
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Прекратить отслеживание после появления
        }
      });
    }, observerOptions);

    gridItems.forEach(item => {
      observer.observe(item);
    });
  });
});
