const MCFlubber = require('../src/main.js');
const MC = require('@kissmybutton/motorcortex');
const FlubberPlugin = MC.loadPlugin(MCFlubber);
const Player = require('@kissmybutton/motorcortex-player');

const myClip = new MC.Clip({
    id: 'my-clip',
    type: 'closed',
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
        margin-top:150px;    
    }`
});

const flubberIncident = new FlubberPlugin.Flubber(
    {
        animatedAttrs: {
            d: [[0, 0], [2, 0], [2, 1], [1, 2], [0, 1]]
        }
    },
    {
        selector: '#flubber',
        duration: 2000
    }
);

const fubberIncident2 = new FlubberPlugin.Flubber(
    {
        animatedAttrs: {
            d: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
        }
    },
    {
        selector: '#flubber',
        duration: 2000
    }
); 

myClip.addIncident(flubberIncident, 0);
myClip.addIncident(fubberIncident2, 2000);
new Player({clip: myClip});


// myClip.play();


