const jumboTL = gsap.timeline();

// create a timeline of each animation

/* JUMBO ANIMATION */

jumboTL
  .fromTo(
    '.jumbo__transparent-color',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.2,
    }
  )
  .fromTo(
    '.header__logo',
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
    }
  )
  .fromTo(
    '.header__menu',
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    '>-1.3'
  )
  .fromTo(
    '.jumbo__titles',
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    '>-1'
  )
  .fromTo(
    '.jumbo__state',
    {
      x: '100%',
    },
    {
      x: 0,
      duration: 1.3,
    }
  )
  .fromTo(
    '.jumbo__store-info',
    {
      y: '100%',
    },
    {
      y: 0,
      duration: 1,
    },
    '>-1.8'
  )
  .fromTo(
    '.jumbo__store-info img',
    {
      y: 400,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    },
    '>-1.8'
  );

/* COLLECTIONS ANIMATION */

const collectionsTL = gsap.timeline();
collectionsTL
  .fromTo(
    '.collections .col-md-6',
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  )
  .fromTo(
    '.collections .l-coll-title ',
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  )
  .fromTo(
    '.collections .r-coll-title span',
    {
      y: 300,
      opacity: 0,
    },
    {
      y: -100,
      opacity: 1,
      duration: 1,
    },
    '>-.8'
  );

/* ANIMATE ON SCROLL */
const homeController = new ScrollMagic.Controller();
const collectionsScene = new ScrollMagic.Scene({
  triggerElement: '.collections',
  triggerHook: 1,
  reverse: false,
  offset: 150,
  duration: 0,
})
  .setTween(collectionsTL)
  .addIndicators()
  .addTo(homeController);

/* HEADER ANIMATION */

const headerTL = gsap.timeline();
headerTL
  .fromTo(
    '.header',
    {
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
      backgroundColor: 'rgba(0,0,0,1)',
      duration: 0.4,
    }
  )
  .fromTo(
    '.header__logo a',
    {
      scale: 1,
    },
    {
      scale: 0.8,
      duration: 0.3,
    },
    '>-.4'
  );

const headerScene = new ScrollMagic.Scene({
  triggerElement: '.jumbo',
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector('.jumbo').offsetHeight + 100,
  duration: 0,
})
  .setTween(headerTL)
  .addIndicators()
  .addTo(homeController);
