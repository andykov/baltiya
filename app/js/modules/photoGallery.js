// 1200 - container width
const sliderPhotosElem = document.querySelector('.js-photo-gallery');
if (sliderPhotosElem) {
  let sliderPhotos = new Splide(sliderPhotosElem, {
    perPage: 1,
    perMove: 1,
    gap: 65,
    pagination: false,
    lazyLoad: 'nearby',
    autoWidth: true,
    padding: {
      left: (window.screen.width - 1200) / 2 + 'px',
      right: (window.screen.width - 1200) / 2 + 'px',
    },
    breakpoints: {
      1240: {
        autoWidth: false,
        padding: {
          right: 220,
        },
        gap: 50,
      },
      991: {
        autoWidth: false,
        padding: {
          right: 165,
        },
        gap: 30,
      },
      639: {
        autoWidth: false,
        padding: {
          right: 80,
        },
        gap: 15,
      },
    },
  });

  sliderPhotos.mount();
  sliderPhotos.on('mounted', setCurrentIndexSLide(sliderPhotos));
  sliderPhotos.on('move', function (newIndex) {
    setCurrentIndexSLide(sliderPhotos, newIndex);
  });
}
