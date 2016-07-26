function addSoundWaveSlider(stage, layer, params) {

/*  var soundWaveSlider = new Konva.Layer();*/

   var group = new Konva.Group({

        x: 0,
        y: 0

   });

  var rect = new Konva.Rect ({

    x: -49,
    y: 330,

    width: 435,
    height: 80,
    fill: ('rgba(61, 60, 55, 0.95)'),

  });

   var soundWaveEqulizer = new Konva.Image ({

        x: -40,
        y: 340,
        image: params.sound_wave,
        width: 415,
        height: 30

   });

    var soundWaveControl = new Konva.Image({

        x: -40,
        y: 385,
        image: params.sound_wave_control,
        width: 415,
        height: 8,

    });



    var soundWaveButton = new Konva.Image({

      x: -44,
      y: 378,

      image: params.sound_wave_cont_btn,

      width: 20,
      height: 20,

      offset: {
        x:0,
        y:0

      },

      draggable: true,

      dragBoundFunc: function (pos){

           var xpos = pos.x;

           if (xpos <= 26)
                xpos = 26;

           if (xpos >= 430)
                xpos = 430;


           return {

               x: xpos,
               y: this.getAbsolutePosition().y
           }
        }
    });

    group.add(rect);
    group.add(soundWaveControl);
    group.add(soundWaveButton);
    group.add(soundWaveEqulizer);

    stage.add(group);
/*
    soundWaveSlider.add(group);
    stage.add(soundWaveSlider);
*/

}
