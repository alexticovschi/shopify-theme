let tl = gsap.timeline();
tl.fromTo(
  '.jumbo__titles h1',
  {
    x: -400,
    opacity: 0,
  },
  {
    x: 100,
    opacity: 1,
    duration: 1.5,
  }
);
