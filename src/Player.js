const MC = require('@kissmybutton/motorcortex');
const TimeCapsule = new MC.TimeCapsule();
const prefix = '@kissmybutton/scrollbar_player';

class Player {
    /**
     * @param {object} options - The options object (optional). Supported options are:
     * - clip: the Clip object
     * - mode: one of chapters or free. If it is anchor then the clip will move back and forwards to anchor points
     * - chapters: an array of objects each of which represents a chapter. The object has the following structure:
     *  - name
     *  - millisecond
     * - wheelSpeed: a value from 1 to 10. Default 5
     * - transitionSpeed: a number > 0 that defines the speed of the transition
     * - latency: an integer (in milliseconds) after wheel event that will trigger transition to chapter
     * - progressIndicator: default false. If set to true a progress indicator will appear
     * - swipeAxis: (either 'vertical' or 'horizontal'. Default = 'vertical')
     * - easing: any of the supported MotorCortex easings
     * - scrollbar: an object with scrollbar configuration:
     *  - display: (boolean, default = true)
     *  - color: the color of the scrollbar (default purple)
     *  - position: (either "left", "right", "top" or "bottom", default "right")
     **/
    constructor(options = {}) {
        this.clip = options.clip;
        this.host = this.clip.props.host;
        this.swipeAxis = (options.swipeAxis || 'vertical') === 'vertical' ? 'clientY' : 'clientX';

        const mode = options.mode || "free";
        if (mode === "free") {
            this.host.onwheel = this.handlePlainWheel.bind(this);
            this.journey = TimeCapsule.startJourney(this.clip);
            this.host.addEventListener('touchstart', this._touchstart.bind(this));
            this.host.addEventListener('touchmove', this._touchmove.bind(this));
        }
        else if (mode === "chapters") {
            this.transitionTimeout = null;
            this.transitionSpeed = options.transitionSpeed || 1;
            this.easing = MC.API.easings[options.easing || 'easeOutQuart'];
            this.transitionStart = null;
            options.chapters.sort(function(a, b) {
                return a.millisecond - b.millisecond;
            });
            this.chapters = options.chapters;
            this.transitioning = false;
            this.host.onwheel = this.handleChapterWheel.bind(this);
            this.host.addEventListener('touchstart', this._touchstart.bind(this));
            this.host.addEventListener('touchmove', this._touchmove.bind(this));
            this.host.addEventListener('touchend', this._chapterTouchend.bind(this));
        }

        const speedFactor = 5 / (options.wheelSpeed || 5);
        this.speed = 1 / speedFactor;

        let scrollbarOptions = {
            display: true,
            position: 'right',
            color: 'purple'
        };
        if (options.hasOwnProperty('scrollbar')) {
            Object.assign(scrollbarOptions, options.scrollbar);
        }
        this._setupScrollbar(scrollbarOptions);
    }

    _setupScrollbar(options) {
        if (options.display === false) {
            return;
        }

        const scrollbarDiv = document.createElement('div');
        scrollbarDiv.setAttribute('id', `${prefix}-scrollbarId`);

        let cssAttrs;
        let variable;
        switch (options.position) {
            case 'left':
                cssAttrs = 'left:0px; top: 0px; width: 2px; height: 0%;';
                variable = 'height';
                break;
            case 'right':
                cssAttrs = 'right:0px; top: 0px; width: 2px; height: 0%;';
                variable = 'height';
                break;
            case 'top':
                cssAttrs = 'top:0px; left: 0px; height: 2px; width: 0%;';
                variable = 'width';
                break;
            case 'bottom':
                cssAttrs = 'bottom:0px; left: 0px; height: 2px; width: 0%;';
                variable = 'width';
                break;
        }

        scrollbarDiv.setAttribute('style', `${cssAttrs} position:absolute; background: ${options.color};`);
        this.host.appendChild(scrollbarDiv);
        this.clip.subscribe(`${prefix}_${new Date().getTime()}`, (ms, state) => {
            scrollbarDiv.style[variable] = `${100*ms/this.clip.duration}%`;
        });
    }

    _touchstart(ev) {
        ev.preventDefault();
        if (ev.touches.length === 1) {
            this.previousTouch = ev.touches[0][this.swipeAxis];
            this.transitioning = false;
        }
    }

    _touchmove(ev) {
        ev.preventDefault();
        this.transitioning = false;
        if (this.transitionTimeout !== null) {
            clearTimeout(this.transitionTimeout);
        }

        const distance = this.previousTouch - event.touches[0][this.swipeAxis];

        if (distance > 0) {
            this.direction = 'fw';
        }
        else {
            this.direction = 'bw';
        }

        this.previousTouch = event.touches[0][this.swipeAxis];
        let millisecondsDelta = 10 * distance * this.speed;
        const journey = TimeCapsule.startJourney(this.clip);
        let newStation = this.clip.runTimeInfo.currentMillisecond + millisecondsDelta;

        if (newStation < 0) {
            newStation = 0;
            millisecondsDelta = 0;
        }
        else if (newStation > this.clip.duration) {
            newStation = this.clip.duration;
            millisecondsDelta = 0;
        }

        journey.destination(newStation);
    }

    _chapterTouchend(event) {
        event.preventDefault();

        if (this.direction === 'fw' && this.clip.runTimeInfo.currentMillisecond !== this.clip.duration) {
            const nextChpater = this._getNextChapter(this.clip.runTimeInfo.currentMillisecond);
            this.transitionTimeout = setTimeout(() => {
                this.transitionToChapter(nextChpater, 'fw');
            }, this.latency);
        }
        else if (this.direction === 'bw' && this.clip.runTimeInfo.currentMillisecond !== 0) {
            const nextChpater = this._getPreviousChapter(this.clip.runTimeInfo.currentMillisecond);
            this.transitionTimeout = setTimeout(() => {
                this.transitionToChapter(nextChpater, 'bw');
            }, this.latency);
        }
    }

    _getNextChapter(millisecond) {
        for (let i = 0; i < this.chapters.length; i++) {
            const chapter = this.chapters[i];
            if (chapter.millisecond > millisecond) {
                return chapter.millisecond;
            }
        }
        return this.clip.duration;
    }

    _getPreviousChapter(millisecond) {
        for (let i = this.chapters.length - 1; i >= 0; i--) {
            const chapter = this.chapters[i];
            if (chapter.millisecond < millisecond) {
                return chapter.millisecond;
            }
        }
        return 0;
    }

    handleChapterWheel(event) {
        event.preventDefault();
        this.transitioning = false;
        if (this.transitionTimeout !== null) {
            clearTimeout(this.transitionTimeout);
        }

        let millisecondsDelta = event.deltaY * this.speed;

        const journey = TimeCapsule.startJourney(this.clip);
        let newStation = this.clip.runTimeInfo.currentMillisecond + millisecondsDelta;

        if (newStation < 0) {
            newStation = 0;
            millisecondsDelta = 0;
        }
        else if (newStation > this.clip.duration) {
            newStation = this.clip.duration;
            millisecondsDelta = 0;
        }

        if (millisecondsDelta > 0) {
            const nextChpater = this._getNextChapter(newStation);
            this.transitionTimeout = setTimeout(() => {
                this.transitionToChapter(nextChpater, 'fw');
            }, this.latency);
        }
        else if (millisecondsDelta < 0) {
            const nextChpater = this._getPreviousChapter(newStation);
            this.transitionTimeout = setTimeout(() => {
                this.transitionToChapter(nextChpater, 'bw');
            }, this.latency);
        }

        journey.destination(newStation);
    }

    transitionToChapter(millisecond) {
        this.transitioning = true;
        this.transitionStart = null;
        this.targetMillisecond = millisecond;
        this.startMillisecond = this.clip.runTimeInfo.currentMillisecond;
        this.journey = TimeCapsule.startJourney(this.clip);
        this.direction = this.targetMillisecond >= this.startMillisecond ? 'fw' : 'bw';
        window.requestAnimationFrame(this._step.bind(this));
    }

    _step(timestamp) {
        if (this.transitionStart === null) {
            this.transitionStart = timestamp;
        }
        const progress = timestamp - this.transitionStart;
        let completed = false;
        let station;
        if (this.direction === 'fw') {
            station = this.startMillisecond + progress * this.transitionSpeed;
            if (station > this.targetMillisecond) {
                station = this.targetMillisecond;
                completed = true;
            }
        }
        else {
            station = this.startMillisecond - progress * this.transitionSpeed;
            if (station < this.targetMillisecond) {
                station = this.targetMillisecond;
                completed = true;
            }
        }

        if (this.transitioning === false) {
            return;
        }

        const easedProgress = Math.abs(station - this.startMillisecond) / Math.abs(this.targetMillisecond - this.startMillisecond);
        let easedMillisecond;
        if (this.direction === 'fw') {
            easedMillisecond = this.startMillisecond + this.easing(easedProgress) * (this.targetMillisecond - this.startMillisecond);
        }
        else {
            easedMillisecond = this.startMillisecond - this.easing(easedProgress) * (this.startMillisecond - this.targetMillisecond);
        }
        this.journey.station(easedMillisecond);
        if (completed) {
            this.journey.destination();
        }
        else {
            window.requestAnimationFrame(this._step.bind(this));
        }
    }

    handlePlainWheel(event) {
        event.preventDefault();

        const millisecondsDelta = event.deltaY * this.speed;
        let newStation = this.clip.runTimeInfo.currentMillisecond + millisecondsDelta;
        if (newStation < 0) {
            newStation = 0;
        }
        else if (newStation > this.clip.duration) {
            newStation = this.clip.duration;
        }
        this.journey.station(newStation);
    }
}

module.exports = Player;
