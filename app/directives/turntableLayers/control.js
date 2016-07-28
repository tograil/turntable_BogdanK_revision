function addControlLayer(stage, layer, params) {

    var controlGroup = new Konva.Group(
      {

          x: 362.5,
          y: 78,
          width: 109,
          height: 337,

     });

    var rollStarted = false;

    var controlImage_up_mid = new Konva.Image({

        x:0,
        y:0,
        image: params.control_high_part,

        width: 91,
        height: 139,

        offset: {
            x: 0,
            y: 0
        },

   });

   var controlImage_mid_right = new Konva.Image({

       x: 138,
       y: 54,
       width: 25,
       height: 116,

       image: params.control_mid_part,
       offset: {

           x: 0,
           y: 0
       },

  });

  var controlImage_smallest = new Konva.Image({

      x: 0,
      y: 259,
      width: 6,
      height: 11,

      image: params.control_smallest_part,
      offset: {

          x: 0,
          y: 0
      },

 });


 var controlImage_low_left = new Konva.Image({

     x: 0,
     y: 150,
     width: 55,
     height: 84,

     image: params.control_low_part_left,
     offset: {

         x: 0,
         y: 0
     },

});



  controlGroup.add(controlImage_up_mid);
  controlGroup.add(controlImage_mid_right);
  controlGroup.add(controlImage_low_left);
  controlGroup.add(controlImage_smallest);


    var angularSpeed = 90;
    var pos = 0;
    var animOne = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        controlGroup.rotate(angleDiff);
        pos++;
        if(pos >= 25)
            animOne.stop();
    }, layer);

    var animTwo = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * -angularSpeed / 1000;
        controlGroup.rotate(angleDiff);
        pos--;
        if(pos <= 0)
            animTwo.stop();
    }, layer);

    stage.add(controlGroup);

/*
control.addEventListener ('mousedown', function (){

   control = true;

})

    control.on('mousemove', function(){

          var angle = 0
              speed = 30,
              angle_max = 90*(Math.PI/180);

                   if (angle <=angle_max ) {
                   angle+= 15*(Math.PI/180);
                   control.rotate((angle*(Math.PI/180))*speed);
              }
              else if(angle >= angle_max) {
                   angle-= 15*(Math.PI/180);
                   control.rotate((angle*(Math.PI/180))*speed);

            }
            layer.batchDraw();
  });
*/

  controlGroup.addEventListener('mousedown', function(){

    alert("hello");


  });


/*
          control.on('mousemove', function(evt) {
          var controlled = true
           mousePos = stage.getPointerPosition();
              if(controlled) {
                var x = mouseoPos.X - stage.GetX();
                var y = mousePos.Y - stage.GetY();
                var angle = Math.atan(y / x);


               var rotation = x >= 0 ? angle : angle + Math.PI;
               control.rotate(rotation - (control.getAngle() / 2));

                    }
                }, false);

                     */
    function controlStart() {
        rollStarted = true;
        animOne.start();
        params.start();
    }

    function controlStop() {
        rollStarted = false;
        animTwo.start();
        params.stop();
    }

    return {
        start: controlStart,
        stop: controlStop

      }
  }



            // add listeners to container
            /*
          control.on('mouseup', function() {

                controlled = false;

              }, false);
*/
