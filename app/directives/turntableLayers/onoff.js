function addOnOffLayer(stage, layer, params) {
    var group = new Konva.Group({
        x: 15,
        y: 290,
        offset: {
            x: 54,
            y: 8
        }
    });

    var off = new Konva.Image({
        x:0,
        y:0,
        image: params.off,
        width: 49,
        height: 37
    });

    var on = new Konva.Image({
        x:0,
        y:0,
        image: params.on,
        width: 49,
        height: 37,
        visible: false
    });

    group.add(on);
    group.add(off);

    on.hide();

    off.on('mousedown', function () {
        params.start();
        off.hide();
        on.show();
        layer.draw();
    });

    on.on('mousedown', function () {
        params.stop();
        off.show();
        on.hide();
        layer.draw();
    });

    stage.add(group);
}
