// $(() => {
window.onload = function() {

    var tl = new TimelineMax({repeat: 3, repeatDelay: 3});

    tl.to("#title-container", 0.2, {ease: Power1.easeIn, opacity: 1, scale: 1, top: 166});
    tl.to("#top-section", 0.5, {ease: Power1.easeOut, top:-264}, 1);
    tl.to("#title-container", 0.5, {ease: Power1.easeOut, scale: 0.5, top: 220}, "-=0.5");
    tl.to("#bottom-section", 0.5, {ease: Power1.easeOut, top: 475}, "-=0.5");

    tl.to("#photo1", 2, {ease: Linear.easeNone, left: -300}, "-=0.5");
    tl.to("#photo1", 0.4, {opacity: 0}, "-=0.4");

    tl.to("#photo2", 0.4, {opacity: 1}, "-=0.4");
    tl.to("#photo2", 2, {ease: Linear.easeNone, left: 0}, "-=0.5");

    tl.to("#photo3", 0.4, {opacity: 1}, "-=0.4");
    tl.to("#photo3", 2, {ease: Linear.easeNone, left: -300}, "-=0.5");

    tl.to("#photo4", 0.4, {opacity: 1}, "-=0.4");
    
    tl.to("#top-section", 0.3, {ease: Power1.easeOut, top: -500}, "-=0.3");
    
    tl.to("#last-screen", 0.3, {ease: Power1.easeIn, opacity: 1}, "-=0.3")
    tl.to("#upto-txt", 0.3, {ease: Power1.easeIn, opacity: 1});
    tl.to("#percent-txt", 0.3, {ease: Power1.easeIn, opacity: 1, scale: 1});
    tl.to("#off-txt", 0.3, {ease: Power1.easeIn, opacity: 1});
}

//  });

// * * * * LINKS
// MY GUY!
// https://www.skillshare.com/classes/Web-animations-using-HTMLCSS-and-JS-Greensock/81122839/projects?via=custom-lists

// Use this to make an animation ease
// https://greensock.com/ease-visualizer/

// Look at this one for inspo
// https://codepen.io/halvves/pen/bwmmWd?editors=1010