function addSpeedSlider(stage, layer, params) {
   var group = new Konva.Group({
            x: 322,
            y: 130
        });

    var speedSliderBase = new Konva.Image({
        x: 0,
        y: 0,
        image: params.speedBase,
        width: 41,
        height: 154
    });

    var speedSliderButton = new Konva.Image({

        x: 29,
        y: 52,
        image: params.speedButton,
        width: 31,
        height: 32,

        offset: {
            x: 15,
            y: 15
        },

        draggable: true,

        dragBoundFunc: function (pos) {

            var ypos = pos.y;

            if(ypos <= 200)
                ypos = 200;
            if(ypos >= 320)
                ypos = 320;
            return {
                y: ypos,
                x: this.getAbsolutePosition().x
            }
        }
    });

    group.add(speedSliderBase);
    group.add(speedSliderButton);

    /*var pressed = false;*/

    stage.add(group);
}
