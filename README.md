# Wheel Player

Control your MotorCortex Clips' execution via mouse wheel or (touch) swipe.
The Player can either operate on "free" mode where the more you scroll (or swipe) the more it moves forwards or backwards or on the "chapters" mode where chapters can be defined.
On "chapters" mode the developer can define distinct chapters (by providing their milliseconds) and on end of each swipe or scroll the Clip will move either forwards or backwards (depending on the direction) in order to reach the closest chapter.

## API
To use the Wheel Player you need to import it
```javascript
const WheelPlayer = import('@kissmybutton/motorcortex-wheel-player');
```

and then you just instantiate a new Player object passing options:
### Free mode example
```javascript
const Player = new WheelPlayer({
    clip: myClip
});
```

### Chapters mode example
```javascript
const Player = new WheelPlayer({
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
```

## Options

| Key | Description |
| ------------- | ------------- |
| mode | (optional, default = "free"). Either "free" or "chapters" |
| wheelSpeed | (optional, default = 5). Valid input is any number from 1 to 10. It defines the speed the Clip will seek forwards or backwards when scrolling or swiping |
| chapters | (valid only on "chapters" mode). It expects an array of objects each of which defines a chapter. Chapters are provided in the form: {name: "<the name of the chapter>", millisecond: <millisecond>} |
| transitionSpeed | (valid only on "chapters" mode, optional, default = 1). Valid input is any number greater than 0. On scroll (or swipe) end the Clip will transition to the next (or previous) chapter. The speed of the transition is in real time (1:1). If provided, the transitionSpeed will affect the transition speed (e.g. setting it to 2 it will transition two times faster, setting it to 0.5 two times slower etc) |
| swipeAxis | (optional, default = "vertical"). It defines the active axis of swipe. Default is vertical meaning the user will have to swipe upwards or downwards in order to control Clip's execution. If is set to "horizontal" the user will need to swipe to left or right |
| progressBar | (optional, default is {display: true, position: 'right', color: 'purple'}). Progress bar visualises the progress of the Clip's execution. By default is positioned on the right and it's visible |
  
## Demo
https://kissmybutton.github.io/motorcortex-scroller/demo/

- On mobile: Swipe left or right to move between chapters
- On desktop devices: use your mouse wheel
  
## License
[MIT License](https://opensource.org/licenses/MIT)


  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
