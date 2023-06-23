//***************************Apply smooth Scroll on Resume Section *************************************
function scrollFun(secLink) {
    window.scrollBy(0, 10);
    if (secLink.getBoundingClientRect().top <= 0) {
        clearInterval(tempScroll);
    }
}
var educationLink = document.querySelectorAll('.education-link');
var tempScroll;
for (var links of educationLink) {
    links.addEventListener('click', function (event) {
        event.preventDefault();
        tempScroll = setInterval(scrollFun, 10, document.getElementById('Education'));
    })
}

var aboutLink = document.querySelectorAll('.about-link');
var tempScroll;
for (var links of aboutLink) {
    links.addEventListener('click', function (event) {
        event.preventDefault();
        tempScroll = setInterval(scrollFun, 10, document.getElementById('About'));
    })
}

var skillslink = document.querySelectorAll('.skills-link');
var tempScroll;
for (var links of skillslink) {
    links.addEventListener('click', function (event) {
        event.preventDefault();
        tempScroll = setInterval(scrollFun, 10, document.getElementById('Skills'));
    })
}
var explink = document.querySelectorAll('.experience-link');
var tempScroll;
for (var links of explink) {
    links.addEventListener('click', function (event) {
        event.preventDefault();
        tempScroll = setInterval(scrollFun, 10, document.getElementById('Experience'));
    })
}

var portfoliolink = document.querySelectorAll('.portfolio-link');
var tempScroll;
for (var links of portfoliolink) {
    links.addEventListener('click', function (event) {
        event.preventDefault();
        tempScroll = setInterval(scrollFun, 10, document.getElementById('Portfolio'));
    })
}

function scrollFun1(secLink) {
    window.scrollBy(0, 10);
    if (secLink.getBoundingClientRect().top <= 100) {
        clearInterval(tempScroll);
    }
}
var contactlink = document.querySelectorAll('.contact-link');
var tempScroll;
for (var links of contactlink) {
    links.addEventListener('click', function (event) {
        event.preventDefault();
        tempScroll = setInterval(scrollFun1, 10, document.getElementById('Contact'));
    })
}


//*********************auto Fill Skill Bar*************************************/
//Handle scroll event
//check that skill section is visible or not
//Now start animation on every skilll---> increase skill width from 0 to skill level
//Store skill level upto which we have to fill.(target level)
//initially width of coloured skill divs is zero.

var skillIndicator = document.querySelectorAll('#Skills #skill-items .skill-indicators div');
var skillContainer = document.getElementById('skill-items');

window.addEventListener('scroll', checkScroll);
var animationDone = false;//fire only once
function initializeBars() {
    for (let i of skillIndicator) {
        i.style.padding = 0 + '%';
    }
}
initializeBars();

function fillBars() {
    for (let bar of skillIndicator) {
        let targetWidth = bar.offsetWidth;
        console.log(targetWidth);
        let currentWidth = 0;
        let interval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + 'px';
        }, 5);
    }
}
function checkScroll() {
    var coordinates = skillContainer.getBoundingClientRect();
    //window.innerheight will give the viewport height
    //if top will becomes smaller than the viewport height then it means skill section is visible to us.
    if (!animationDone && coordinates.top < window.innerHeight) {
        fillBars();
        animationDone = true;
    }
    else if (coordinates.top > window.innerHeight) {
        animationDone = 0;
        initializeBars();
    }
}