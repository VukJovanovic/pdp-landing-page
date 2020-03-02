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

aboutBtnDesktop.addEventListener('click', e => {
  e.preventDefault();
  jump('.about');
});

pricingBtnDesktop.addEventListener('click', e => {
  e.preventDefault();
  jump('.pricing');
});

// mobile navigation
aboutBtnMobile.addEventListener('click', e => {
  e.preventDefault();
  closeMenu();
  jump('.about');
});
pricingBtnMobile.addEventListener('click', e => {
  e.preventDefault();
  closeMenu();
  jump('.pricing');
});

// Scroll top button fucntionality
buttonScrollTop.addEventListener('click', e => {
  e.preventDefault();
  jump('.welcome');
});
