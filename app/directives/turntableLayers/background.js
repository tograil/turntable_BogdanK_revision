function addBackgroundLayer(stage, image) {
    var backgroundLayer = new Konva.Layer();
    var background = new Konva.Image({
        x: 0,
        y: 0,
        image: image,
        width: 478,
        height: 404
    });

    backgroundLayer.add(background);
    stage.add(backgroundLayer);
}
