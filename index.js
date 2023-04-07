AOS.init({once: true});

anime({
    targets: ['.hero .images .plane', '.start .images .plane'],
    translateX: ['120%', '-650%'],
    translateY: ['175%', '-300%'],
    scale: 0.5,
    loop: true,
    duration: 15000,
    delay: 1000,
    easing: 'linear',
})
anime({
    targets: ['.hero .images .cloud', '.start .images .cloud'],
    easing: 'linear',
    translateX: ['180%', '-865%'],
    translateZ: ['0', '0'],
    loop: true,
    duration: 55000,
    delay: 1000,
});
anime({
    targets: ['.hero .images .clouds', '.start .images .clouds'],
    easing: 'linear',
    translateX: ['120%', '-265%'],
    translateZ: ['0', '0'],
    loop: true,
    duration: 35000,
    delay: 500,
});



const box1 = document.querySelector('#animate-stats1');
const box2 = document.querySelector('#animate-stats2');
const box3 = document.querySelector('#animate-stats3');

console.log(box1)
console.log(box2)
console.log(box3)

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var bar1 = new ProgressBar.Circle(circle1, {
    strokeWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    color: '#11BAE9',
    trailColor: '#E2E2E2',
    trailWidth: 8,
    svgStyle: null,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + '%');
    }
});


var bar2 = new ProgressBar.Circle(circle2, {
    strokeWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    color: '#1F4471',
    trailColor: '#E2E2E2',
    trailWidth: 8,
    svgStyle: null,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + '%');
    }
});


var bar3 = new ProgressBar.Circle(circle3, {
    strokeWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    color: '#F8A919',
    trailColor: '#E2E2E2',
    trailWidth: 8,
    svgStyle: null,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + '%');
    }
});

document.addEventListener('scroll', function () {
    if (isInViewport(box1)) {
        bar1.animate(0.89);  // Number from 0.0 to 1.0
    }
    if (isInViewport(box2)) {
        bar2.animate(0.86);  // Number from 0.0 to 1.0
    }
    if (isInViewport(box3)) {
        bar3.animate(0.66);  // Number from 0.0 to 1.0
    }
});