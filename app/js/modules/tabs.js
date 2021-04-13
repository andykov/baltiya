import { getSiblings } from '../utils/helpers';

// tabs init
if (document.querySelector('[data-tabs]')) {
  tabbis();
}

document.addEventListener(
  'tabbis',
  (e) => {
    let data = e.detail;
    setLabelActiveTab(data);

    let siblings = getSiblings(data.pane);
    siblings.forEach(function (item) {
      item.classList.remove('show');
    });

    data.pane.classList.add('show');
  },
  false
);

let tabsMobile = document.querySelectorAll('[data-tabs-mobile]');
if (tabsMobile) {
  tabsMobile.forEach(function (btn) {
    btn.textContent = btn.parentNode.querySelector(
      '[tabindex="0"]'
    ).textContent;

    btn.addEventListener('click', function (e) {
      e.target.classList.toggle('active');
      let tabs = e.target.parentNode.querySelector('[data-tabs]');
      tabs.classList.toggle('show');
    });
  });
}

function setLabelActiveTab(data) {
  if (!data) {
    return false;
  }

  let parent = data.tab.closest('.tabs-nav');
  if (parent) {
    let mobileBtn = parent.querySelector('[data-tabs-mobile]') || null;
    if (mobileBtn) {
      mobileBtn.textContent = data.tab.textContent;
    }
  }
}
