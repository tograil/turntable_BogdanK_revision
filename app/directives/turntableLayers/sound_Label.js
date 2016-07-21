function addSoundWaveSlider(stage, layer, params) {

/*  var soundWaveSlider = new Konva.Layer();*/

   var group = new Konva.Group({

        x: 0,
        y: 50

   });

   var soundWaveEqulizer = new Konva.Image ({

        x: 0,
        y: 0,
        image: params.sound_wave,
        width: 340,
        height: 10

   });

    var soundWaveControl = new Konva.Image({

        x:0,
        y:0,
        image: params.sound_wave_control,
        width: 340,
        height: 50,

    });



    var soundWaveButton = new Konva.Image({

      x:0,
      y:0,
      image: params.sound_wave_cont_btn,
      width: 50,
      height: 50,
      offset: {

        x:15,
        y:15

      },

      draggable: true,

      dragS_WaveBtn: function (){

           var xPos = pos.x;

           if (xPos <=0)
                xPos = 0;

           if (xPos >= 360)
                xPos = 360;


           return {

               x: xPos,
               y: this.getAbsolutePosition().y
           }
        }
    });

    group.add(soundWaveButton);
    group.add(soundWaveControl);
    group.add(soundWaveEqulizer);

    stage.add(group);
/*
    soundWaveSlider.add(group);
    stage.add(soundWaveSlider);
*/

}
