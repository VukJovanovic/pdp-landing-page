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

aboutBtnDesktop.addEventListener('click', e => {
  e.preventDefault();
  jump('.about');
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

const mcForm = $('mc-embedded-subscribe-form');
const mcButton = $('mc-embedded-subscribe');
const formResult = $('mc-result');

$('mc-embedded-subscribe-form').bind('click', function(e){
  e.preventDefault();
  if(isValidEmail){
    submitMcForm($mcForm);
  }
})

const isValidEmail = () =>{
  const email = document.getElementById('mce-EMAIL').value;
  const reg =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  if(reg.test(email) && email.length > 0){
    return true;
  } else{
    return false;
  }
}

const submitMcForm = ($form, formResult) => {
  $.ajax({
    type: $form.attr("method"),
    url: $form.attr("action"),
    data: $form.serialize(),
    cache: false,
    dataType: "json",
    contentType: 'application/json; charset=utf-8',
    error: function (error) {
      alert('Could not connect to the registration server. Please try again later.')
    },
    success: function (data) {
        if (data.result != "success") {
            var message = data.msg || "Sorry. Unable to subscribe. Please try again.";
            if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                message = "You're already subscribed. Thank you.";
            }
            formResult.html('<p>' + message + '</p>');
        } else {
          console.log(data.msg);
        }
    }
  })
}