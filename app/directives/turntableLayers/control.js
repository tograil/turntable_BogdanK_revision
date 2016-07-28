function addControlLayer(stage, baseGroup, layer, params) {

    var controlGroup = new Konva.Group(
      {
          x: 355.5,
          y: 81.5,
          width: 109,
          height: 337,
          offset: {
              x:34,
              y:74
          }

     });

    var controlImageUpMid = new Konva.Image({

        x:0,
        y:0,
        image: params.control_high_part,

        width: 91,
        height: 139

   });

   var controlImageMidRight = new Konva.Image({

       x: 36.2,
       y: 139,
       width: 25,
       height: 116,

       image: params.control_mid_part,
       offset: {

           x: 0,
           y: 0
       },

  });

  var controlImageSmallest = new Konva.Image({

        x: 30.2,
        y: 244,
        width: 6,
        height: 11,

        image: params.control_smallest_part,
        offset: {

            x: 0,
            y: 0
        },

    });

    var controlSmallPart = new Konva.Image({

        x: 30.2,
        y: 244,
        width: 6,
        height: 11,

        image: params.controlSmallPart,
        offset: {

            x: 0,
            y: 0
        },

    });


 var controlImageLowLeft = new Konva.Image({
     x: -18.9,
     y: 255,
     width: 55,
     height: 84,

     image: params.control_low_part_left,
     offset: {

         x: 0,
         y: 0
     }
});



  controlGroup.add(controlImageUpMid);
  controlGroup.add(controlImageMidRight);
    controlGroup.add(controlImageSmallest);
    controlGroup.add(controlImageLowLeft);
    controlGroup.add(controlSmallPart);
    //
    //
    baseGroup.add(controlGroup);


    /*var angularSpeed = 90;
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

    var controlUsed = false;

    var pos = stage.getPointerPosition();
    var currentPos = {
        x: pos.x - image.x(),
        y: pos.y - image.y()
    };

    controlSmallPart.addEventListener('mousedown', function(){
        var pos = stage.getPointerPosition();
        currentPos = {
            x: pos.x - image.x(),
            y: pos.y - image.y()
        };
    controlUsed = true;
  });

    controlSmallPart.addEventListener('mouseup', function(){

        controlUsed = false;
    });

    controlSmallPart.addEventListener('mousemove', function(){

        if(controlUsed)
        {
            var pos = stage.getPointerPosition();
            var localPos = {
                x: pos.x - image.x(),
                y: pos.y - image.y()
            };
        }
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
