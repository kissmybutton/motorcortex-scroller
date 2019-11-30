const MCFlubber = require('@kissmybutton/motorcortex-flubber');
const MC = require('@kissmybutton/motorcortex');
const FlubberPlugin = MC.loadPlugin(MCFlubber);
const Player = require('../src/Player');

const myClip = new MC.Clip({
    id: 'my-clip',
    host: document.getElementById('clip-container'),
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="500">
            <g transform="translate(240 10) scale(30 30)">
                <path id="flubber" d="M1,0 L2,2 L0,2 Z"></path>
            </g>
        </svg>`,
    css: `#flubber{
        fill: #8b00ff;
        display:block;
    }
    svg{
        background: black; 
    }`
});

const flubberIncident = new FlubberPlugin.Flubber({
    animatedAttrs: {
        d: [
            [0, 0],
            [2, 0],
            [2, 1],
            [1, 2],
            [0, 1]
        ]
    }
}, {
    selector: '#flubber',
    duration: 2000
});

const fubberIncident2 = new FlubberPlugin.Flubber({
    animatedAttrs: {
        d: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
    }
}, {
    selector: '#flubber',
    duration: 2000
});

myClip.addIncident(flubberIncident, 0);
myClip.addIncident(fubberIncident2, 2000);
new Player({
    clip: myClip,
    speed: 5,
    mode: 'chapters',
    chapters: [{
            millisecond: 2000,
            name: 'chapter 1'
        },
        {
            millisecond: 4000,
            name: 'chapter 2'
        }
    ],
    transitionSpeed: 2,
    swipeAxis: 'horizontal',
    scrollbar: {
        color: 'pink',
        position: 'top'
    }
});


// myClip.play();
