function addDiscLayer(stage, layer, image) {
    var group = new Konva.Group();

    var disc = new Konva.Image({
        x: 130,
        y: 148,

        image: image,
        width: 338,
        height: 338,

        offset: {
            x: 168.7,
            y: 163.9

          }
    });

    group.add(disc);
    stage.add(group);

    // one revolution per 4 seconds
    var angularSpeed = 100;
    var anim = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        disc.rotate(angleDiff);
    }, layer);

    return {
        start: function() {
            anim.start()
        },
        stop: function () {
            anim.stop();
        }

    }
}
