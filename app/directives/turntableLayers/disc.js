function addDiscLayer(stage, layer, image) {
    var group = new Konva.Group();

    var disc = new Konva.Image({
        x: 207,
        y: 185,

        image: image,
        width: 411,
        height: 411,

        offset: {
            x: 230,
            y: 190
        }
    });

    group.add(disc);
    stage.add(group);

    // one revolution per 4 seconds
    var angularSpeed = 90;
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
