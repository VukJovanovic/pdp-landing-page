// animation for displaying sidebar on mobile devices

// sidebar elements
const sidebarOv = document.querySelector('.sidebarOverlay');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.sidebar__close');
const sidebarLinks = document.querySelectorAll('.sidebarNavigation__link');
const openMenu = () => {
  TweenMax.to(sidebar, 0.4, { width: '80vw' });
  TweenMax.to(sidebarOv, 0.4, { opacity: 1, width: '20vw', delay: 0.2 });
  TweenMax.to(closeSidebar, 0.4, { opacity: 1, y: 0, delay: 0.4 });

  let delay = 0.5;
  for (let i = 0; i < sidebarLinks.length; i++) {
    TweenMax.to(sidebarLinks[i], 0.4, { opacity: 1, y: 0, delay });

    delay += 0.1;
  }
};

const closeMenu = () => {
  let delay = 0.1;
  let lenght = sidebarLinks.length;
  for (let i = lenght - 1; i >= 0; i--) {
    TweenMax.to(sidebarLinks[i], 0.4, { opacity: 0, y: '-10px', delay });
    delay += 0.1;
  }
  TweenMax.to(closeSidebar, 0.4, { opacity: 0, y: '-10px', delay: 0.5 });
  TweenMax.to(sidebarOv, 0.4, { opacity: 0, width: '0', delay: 0.5 });
  TweenMax.to(sidebar, 0.4, { width: '0', delay: 0.6 });
};

export { openMenu, closeMenu };
