const blueBox = document.querySelector('.blue-box');
const logo = document.querySelector('#myHeader .logo');
const navs = document.querySelector('#myHeader .nav');
const textCont = document.querySelector('.hero .left-side');
const banner = document.querySelector('.hero .bluebox .banner');
const values = document.querySelector('.values');

const tl = new TimelineMax();

tl.fromTo(
    blueBox, 
    1.5, 
    { height: "0%" }, 
    { height: "100%", ease: Power2.easeInOut }    
)
.fromTo(
    blueBox,
    1.2,
    { width: '100vw' },
    { width: '50vw' },
    "-=0.5"
)
.fromTo(
    logo,
    1.2,
    { opacity: 0, x: '-100%' },
    { opacity: 1, x: '0%' },
    "-=0.5"
)
.fromTo(
    navs,
    1.2,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
)
.fromTo(
    textCont,
    1,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
)
.fromTo(
    values,
    1.2,
    { opacity: 0, x: '-100%' },
    { opacity: 1, x: '0%' },
    "-=0.1"
)

   
