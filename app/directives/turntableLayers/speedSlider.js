function addSpeedSlider(stage, layer, params) {
   var group = new Konva.Group({
            x: 540,
            y: 170
        });

    var speedSliderBase = new Konva.Image({
        x: 0,
        y: 0,
        image: params.speedBase,
        width: 40,
        height: 162
    });

    var speedSliderButton = new Konva.Image({
       x: 27,
        y: 76,
        image: params.speedButton,
        width: 29,
        height: 30,
        offset: {
            x: 15,
            y: 15
        },
        draggable: true,
        dragBoundFunc: function (pos) {
            var ypos = pos.y;

            if(ypos <= 240)
                ypos = 240;
            if(ypos >= 360)
                ypos = 360;
            return {
                y: ypos,
                x: this.getAbsolutePosition().x
            }
        }
    });

    group.add(speedSliderBase);
    group.add(speedSliderButton);

    var pressed = false;



    stage.add(group);
}
