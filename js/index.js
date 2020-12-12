import _ from 'underscore';
import jump from 'jump.js';
import { openMenu, closeMenu } from './animations';

const buttonScrollTop = document.querySelector('.btn__scrollTop');

// fixed header functionality
const checkHeader = _.throttle(() => {
  // Detect scroll position
  let scrollPosition = Math.round(window.scrollY);

  // If we scrolled we add class to our navigation bar
  if (scrollPosition > 1) {
    document.querySelector('.header').classList.add('headerFixed');
  } else {
    document.querySelector('.header').classList.remove('headerFixed');
  }

  // Show button that scrolls on top of the page when you click it
  if (scrollPosition > 50) {
    buttonScrollTop.classList.add('btn__scrollTop-show');
  } else {
    buttonScrollTop.classList.remove('btn__scrollTop-show');
  }
}, 300);

window.addEventListener('scroll', checkHeader);

// sidebar functionality on mobile devices
const mobileBurger = document.querySelector('.mobileNavigation__burger');
if (mobileBurger) {
  mobileBurger.addEventListener('click', function(e) {
    e.preventDefault();
    openMenu();
  });
}

const closeSidebar = document.querySelector('.sidebar__close');
if (closeSidebar) {
  closeSidebar.addEventListener('click', function(e) {
    e.preventDefault();
    closeMenu();
  });
}

const sidebarOverlay = document.querySelector('.sidebarOverlay');
if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeMenu);
}

// Disable scrolling on mobile menu and overlay
const sidebarFixScroll = document.querySelector('.sidebar');
const sidebarOverlayFixScroll = document.querySelector('.sidebarOverlay');
sidebarFixScroll.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault();
  },
  false
);
sidebarOverlayFixScroll.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault();
  },
  false
);

// navigation functionality
const aboutBtnDesktop = document.getElementById('aboutBtn-desktop');
const pricingBtnDesktop = document.getElementById('pricingBtn-desktop');
const aboutBtnMobile = document.getElementById('aboutBtn-mobile');
const pricingBtnMobile = document.getElementById('pricingBtn-mobile');
const contactBtnDesktop = document.getElementById('contactBtn-desktop');
const contactBtnMobile = document.getElementById('contactBtn-mobile');
const getStartedBtn = document.querySelector('.getStartedBtn');
const welcomeCta = document.querySelector('.welcome__cta-btn');

// footer navigation
const footerAbout = document.getElementById('footerAbout');
const footerFeatures = document.getElementById('footerFeatures');
const footerBenefits = document.getElementById('footerBenefits');
const footerPricing = document.getElementById('footerPricing');

aboutBtnDesktop.addEventListener('click', e => {
  e.preventDefault();
  jump('.about');
});
welcomeCta.addEventListener('click', e => {
  e.preventDefault();
  jump('.pricing');
});

pricingBtnDesktop.addEventListener('click', e => {
  e.preventDefault();
  jump('.pricing');
});

getStartedBtn.addEventListener('click', e => {
  e.preventDefault();
  jump('.pricing');
});

contactBtnDesktop.addEventListener('click', e => {
  e.preventDefault();
  jump('.contact');
});

// footer nav
footerAbout.addEventListener('click', e => {
  e.preventDefault();
  jump('.about');
});
footerPricing.addEventListener('click', e => {
  e.preventDefault();
  jump('.pricing');
});
footerBenefits.addEventListener('click', e => {
  e.preventDefault();
  jump('.benefits');
});
footerFeatures.addEventListener('click', e => {
  e.preventDefault();
  jump('.howItWorks');
});

// mobile navigation
// aboutBtnMobile.addEventListener('click', e => {
//   e.preventDefault();
//   closeMenu();
//   jump('.about');
// });
pricingBtnMobile.addEventListener('click', e => {
  e.preventDefault();
  closeMenu();
  jump('.pricing');
});
contactBtnMobile.addEventListener('click', e => {
  e.preventDefault();
  closeMenu();
  jump('.contact');
});

// Scroll top button fucntionality
buttonScrollTop.addEventListener('click', e => {
  e.preventDefault();
  jump('.welcome');
});


// mailchimp form

