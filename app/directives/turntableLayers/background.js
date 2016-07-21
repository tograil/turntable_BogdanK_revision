function addBackgroundLayer(stage, image) {
    var backgroundLayer = new Konva.Layer();
    var background = new Konva.Image({
        x:10,
        y:0,
        image: image,
        width: 640,
        height: 550
    });

    backgroundLayer.add(background);
    stage.add(backgroundLayer);
}
