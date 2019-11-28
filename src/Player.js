const MC = require('@kissmybutton/motorcortex');
const TimeCapsule = new MC.TimeCapsule();

class Player{
    /**
     * @param {object} options - The options object (optional). Supported options are:
     * - clip: the Clip object
     * - mode: one of anchor or free. If it is anchor then the clip will move back and forwards to anchor points
     * - anchorPoints: an array of milliseconds each of which defines an anchor point
     * - speed: a value from 1 to 10. Default 5
     * - progressIndicator: default false. If set to true a progress indicator will appear
    **/
    constructor(options={}){
        this.clip = options.clip;
        this.host = this.clip.props.host;
        
        this.host.onwheel = this.handleWheel.bind(this);
        this.journey = TimeCapsule.startJourney(this.clip);
        
        const speedFactor = 5/(options.speed || 5);
        this.speed = 1/speedFactor;
    }
    
    handleWheel(event){
        event.preventDefault();
        
        const millisecondsDelta = event.deltaY * this.speed;
        let newStation = this.clip.runTimeInfo.currentMillisecond + millisecondsDelta;
        if(newStation < 0){
            newStation = 0;
        } else if(newStation > this.clip.duration){
            newStation = this.clip.duration;
        }
        this.journey.station(newStation);
    }
}

module.exports = Player;