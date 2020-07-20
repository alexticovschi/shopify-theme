let jumboTL = gsap.timeline();

// create a timeline of each animation
jumboTL
  .fromTo(
    '.jumbo__transparent-color',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
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
      duration: 1.3,
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
