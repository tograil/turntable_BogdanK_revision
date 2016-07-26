function add3345Layer(stage, layer, params) {

var group = new Konva.Group({
    x: 10,
    y: 305
});

var off33 = new Konva.Image({
    x:0,
    y:0,
    image: params.off33,
    width: 30,
    height: 10,
    visible: false
});

var on33 = new Konva.Image({
    x:0,
    y:0,
    image: params.on33,
    width: 30,
    height: 10
});

var off45 = new Konva.Image({
    x:32,
    y:0,
    image: params.off45,
    width: 30,
    height: 10
});

var on45 = new Konva.Image({
    x:32,
    y:0,
    image: params.on45,
    width: 30,
    height: 10,
    visible: false
});

group.add(on33);
group.add(off33);
group.add(on45);
group.add(off45);

off33.hide();
on45.hide();

off45.on('mousedown', function () {
    //params.start();
    off45.hide();
    on33.hide();
    off33.show();
    on45.show();
    layer.draw();
});

off33.on('mousedown', function () {
    //params.stop();
    on45.hide();
    off33.hide();
    on33.show();
    off45.show();
    layer.draw();
});

stage.add(group);
}
