var Rect = require('rect');

function Snippet(object) {
  this.object = object;

  var a = arguments;
  if (a.length == 2) {
    this.rect = a[1];
  } else {
    this.rect = new Rect(a[1], a[2], a[3], a[4]);
  }
}

Snippet.prototype = {

  draw: function(ctx, x, y) {
    var rect = this.rect;

    ctx.drawImage(
      this.object,
      rect.left, rect.top, rect.width, rect.height,
      x, y, rect.width, rect.height
    );
  }

};

module.exports = Snippet;
