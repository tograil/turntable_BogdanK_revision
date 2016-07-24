function addControlLayer(stage, layer, params) {

    var controlGroup = new Konva.Group();

    var rollStarted = false;

    var control = new Konva.Image({
        x:428,
        y: 100,
        image: params.image,
        width: 110,
        height: 310,
        offset: {
            x: 65,
            y: 80
        },

   });

  controlGroup.add(control);

    var angularSpeed = 90;
    var pos = 0;
    var animOne = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        control.rotate(angleDiff);
        pos++;
        if(pos >= 25)
            animOne.stop();
    }, layer);

    var animTwo = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * -angularSpeed / 1000;
        control.rotate(angleDiff);
        pos--;
        if(pos <= 0)
            animTwo.stop();
    }, layer);

    stage.add(controlGroup);


control.addEventListener ('mousedown', function (){

  /*  control = true;*/

})

    control.on('mousemove', function(){

          var angle = 0
              speed = 40,
              angle_max = 30*Math.PI/180;
              if (angle <=angle_max ) {
                   angle += 1;
                   control.rotate((angle*(Math.PI/180))*speed);
                   layer.draw();
              }
              else if(angle >= angle_max) {
                  angle -= 1;
                  control.rotate((angle*(Math.PI/180))*speed);
                  layer.draw();

            }
  });

  control.addEventListener('mouseup', function(){

  /*  control = getCurrentPosition();*/

  })
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
