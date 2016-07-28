function addSpeedSlider(stage, layer, params, disc) {
   var group = new Konva.Group({
            x: 383,
            y: 164
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
                /*angularSpeed = -90;*/
            if(ypos >= 320)
                ypos = 320;
                /*angularSpeed = 90;*/

            return {
                y: ypos,
                x: this.getAbsolutePosition().x,
              /*  angularSpeed: angularSpeed*/

            }
        }


    });




speedSliderButton.on('mousemove', function(){

    var ypos = 0;
    if (ypos == 200) {

      disc.changeSpeed(90);
    }

    else if (ypos == 320){

        disc.changeSpeed(-90)

    }

});



    group.add(speedSliderBase);
    group.add(speedSliderButton);

    /*var pressed = false;*/

    stage.add(group);
}
