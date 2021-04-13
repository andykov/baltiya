import { overlayVisibility } from '../utils/helpers';

let mobileNavTrigger = document.querySelector('.mobile-nav-trigger'),
  mobileNavClose = document.querySelector('.mobile-nav-close');

if (mobileNavTrigger && mobileNavClose) {
  mobileNavTrigger.addEventListener('click', function (e) {
    e.stopPropagation();
    let nav = document.querySelector('.nav');
    nav.classList.add('opened');
    overlayVisibility(true);
  });

  mobileNavClose.addEventListener('click', function (e) {
    e.stopPropagation();
    let nav = document.querySelector('.nav');
    nav.classList.remove('opened');
    overlayVisibility(false);
  });
}
