import {
  isHidden,
  isOutSideClick,
  overlayVisibility,
  getSiblings,
} from './utils/helpers';

import setViewCurrentIndexSlide from './utils/setViewCurrentIndexSlide';

import './modules/initPhotoSwipe';
import './modules/tabs';
import './modules/photoGallery';
import './modules/productQuantity';

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('[data-subnav-toggle]')) {
    document
      .querySelector('[data-subnav-toggle]')
      .addEventListener('click', function (event) {
        const target = event.target;
        const parent = target.closest('.nav__item');
        if (parent) {
          parent.classList.toggle('show');
        }
      });
  }

  if (document.querySelector('#slider-category')) {
    new Splide('#slider-category', {
      perPage: 3,
      gap: 60,
      pagination: false,
      arrowPath: 'M23.5 14L29.5 20M29.5 20L23.5 26M29.5 20H10',
      autoplay: true,
      rewind: true,
      perMove: 1,
      breakpoints: {
        1239: {
          perPage: 3,
          gap: 30,
        },
        991: {
          perPage: 2,
          gap: 30,
        },
        639: {
          perPage: 1,
        },
      },
    }).mount({
      setViewCurrentIndexSlide,
    });
  }

  if (document.querySelector('#slider-products-new')) {
    new Splide('#slider-products-new', {
      perPage: 4,
      gap: 40,
      pagination: false,
      arrowPath: 'M23.5 14L29.5 20M29.5 20L23.5 26M29.5 20H10',
      arrows: false,
      autoplay: true,
      rewind: true,
      perMove: 1,
      breakpoints: {
        1239: {
          perPage: 4,
          gap: 60,
        },
        991: {
          perPage: 3,
          gap: 20,
        },
        639: {
          perPage: 2,
          gap: 20,
        },
      },
    }).mount();
  }

  if (document.querySelector('#slider-products-similar')) {
    new Splide('#slider-products-similar', {
      perPage: 4,
      gap: 40,
      pagination: false,
      arrowPath: 'M23.5 14L29.5 20M29.5 20L23.5 26M29.5 20H10',
      arrows: true,
      autoplay: true,
      rewind: true,
      perMove: 1,
      breakpoints: {
        1239: {
          perPage: 4,
          gap: 60,
        },
        991: {
          perPage: 3,
          gap: 20,
        },
        639: {
          perPage: 2,
          gap: 20,
        },
      },
    }).mount({
      setViewCurrentIndexSlide,
    });
  }

  if (
    document.querySelector('#product-gallery') &&
    document.querySelector('#product-gallery-preview')
  ) {
    const secondarySlider = new Splide('#product-gallery-preview', {
      rewind: true,
      fixedWidth: 80,
      fixedHeight: 80,
      isNavigation: true,
      gap: 20,
      // focus: 'center',
      pagination: false,
      cover: true,
      arrows: false,
      breakpoints: {
        991: {
          fixedWidth: 57,
          fixedHeight: 57,
          gap: 15,
        },
        639: {
          destroy: 'completely',
        },
      },
    }).mount();

    const primarySlider = new Splide('#product-gallery', {
      type: 'fade',
      // heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
      breakpoints: {
        1239: {
          fixedHeight: 500,
        },
        991: {
          fixedHeight: 280,
        },
        639: {
          fixedHeight: 280,
          pagination: true,
        },
      },
    });

    primarySlider.sync(secondarySlider).mount();
  }

  if (document.querySelector('#map') && document.querySelector('#map-nav')) {
    const mapNavSlider = new Splide('#map-nav', {
      type: 'fade',
      perPage: 1,
      perMove: 1,
      rewind: true,
      isNavigation: true,
      gap: 20,
      focus: 'center',
      pagination: false,
      arrowPath: 'M23.5 14L29.5 20M29.5 20L23.5 26M29.5 20H10',
      arrows: true,
      breakpoints: {
        991: {
          gap: 15,
        },
      },
    }).mount({
      setViewCurrentIndexSlide,
    });

    const mapSlider = new Splide('#map', {
      perMove: 1,
      type: 'fade',
      pagination: false,
      arrows: false,
      breakpoints: {
        639: {
          pagination: false,
        },
      },
    });

    mapSlider.sync(mapNavSlider).mount();
  }

  function toggleFilterMore(event) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target;
    let targetText = target.innerText;
    let parent = target.closest('.filter__part');
    console.log(target.closest('.filter__part'));
    if (parent) {
      let more = parent.querySelector('[data-filter-more]');
      more.toggleAttribute('hidden');
      target.innerText = target.getAttribute('data-text-replace');
      target.setAttribute('data-text-replace', targetText);
    }
  }

  function toggleFilterCollapse(event) {
    event.stopPropagation();
    const target = event.target;
    target.closest('.filter__part').classList.toggle('hide');
  }

  function toggleCatalogDisplay(event) {
    event.stopPropagation();
    const target = event.target;
    const catalog = document.querySelector('[data-catalog-layout]');

    getSiblings(target).forEach(function (elem) {
      elem.classList.remove('active');
    });

    target.classList.add('active');

    if (target.classList.contains('catalog-view-list')) {
      catalog.setAttribute('data-catalog-layout', 'list');
    } else if (target.classList.contains('catalog-view-grid')) {
      catalog.setAttribute('data-catalog-layout', 'grid');
    }
  }

  document.querySelectorAll('.filter__more').forEach(function (btn) {
    btn.addEventListener('click', toggleFilterMore);
  });

  document.querySelectorAll('.filter__name').forEach(function (btn) {
    btn.addEventListener('click', toggleFilterCollapse);
  });

  document
    .querySelectorAll('.catalog-view-grid, .catalog-view-list')
    .forEach(function (btn) {
      btn.addEventListener('click', toggleCatalogDisplay);
    });

  document
    .querySelector('.mobile-trigger')
    .addEventListener('click', function (event) {
      event.stopPropagation();
      event.preventDefault();
      this.classList.toggle('active');
      document.querySelector('.header__main').classList.toggle('show');
    });

  if (document.querySelector('[data-mobile-filter]')) {
    document
      .querySelector('[data-mobile-filter]')
      .addEventListener('click', function (event) {
        document.querySelector('.filter').classList.toggle('show');
      });
  }
  const mediaQuery = window.matchMedia('(min-width: 991px)');

  mediaQuery.addListener(movingMobileNav);
  movingMobileNav(mediaQuery);

  function movingMobileNav(event) {
    const search = document.querySelector('.top-panel__search');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.nav');
    const topPanel = document.querySelector('.top-panel__inner');

    if (event.matches) {
      topPanel.appendChild(search);
    } else {
      nav.insertBefore(search, nav.firstElementChild);
    }
  }
  document.addEventListener('click', function (e) {
    if (isOutSideClick(e, '.nav')) {
      let nav = document.querySelector('.nav');
      if (nav.querySelector('.nav__item.show')) {
        nav.querySelector('.nav__item.show').classList.remove('show');
      }
    }
  });
});
