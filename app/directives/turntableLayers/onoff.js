function addOnOffLayer(stage, layer, params) {
    var group = new Konva.Group({
        x: 30,
        y: 403,
        offset: {
            x: 55,
            y: 10
        }
    });

    var off = new Konva.Image({
        x:0,
        y:0,
        image: params.off,
        width: 50,
        height: 40
    });

    var on = new Konva.Image({
        x:0,
        y:0,
        image: params.on,
        width: 50,
        height: 40,
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
