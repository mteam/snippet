# mteam/snippet

This component draws a portion of image or canvas on another canvas. It is just a wrapper for canvas context `drawImage` function. It can be used in tilesheets or spritesheets.

## API

### new Snippet(object, x, y, width, height)

The first argument can be an image or a canvas that will be drawn.

```javascript
var img = new Image();
var snip = new Snippet(img, 10, 10, 100, 100);
```

### .draw(ctx, x, y)

```javascript
var ctx = canvas.getContext('2d');
snip.draw(ctx, 50, 50);
```
