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

var controller = new ScrollMagic.Controller();

const box1 = document.querySelector('#animate-stats1');
const box2 = document.querySelector('#animate-stats2');
const box3 = document.querySelector('#animate-stats3');

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

bar1.set(0);
bar2.set(0);
bar3.set(0);

var trigger1 = new ScrollMagic.Scene({triggerElement: "#animate-stats1", duration: 200});
var trigger2 = new ScrollMagic.Scene({triggerElement: "#animate-stats2", duration: 200});
var trigger3 = new ScrollMagic.Scene({triggerElement: "#animate-stats3", duration: 200});
trigger1.addTo(controller);
trigger2.addTo(controller);
trigger3.addTo(controller);
trigger1.on("enter", function (e) {
    bar1.animate(0.89);
});
trigger2.on("enter", function (e) {
    bar2.animate(0.86);
});
trigger3.on("enter", function (e) {
    bar3.animate(0.66);
});