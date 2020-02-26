import { openMenu, closeMenu } from './animations';

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
