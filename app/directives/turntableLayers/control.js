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

          control.on('mousedown', function() {
                angularVelocity = 0;
                controlled = true;
                /*var control = evt.target;*/
            });
            // add listeners to container
          control.on('mouseup', function() {

                controlled = false;

              }, false);

            control.on('mousemove', function() {
                var controlled = true
                 mousePos = stage.getPointerPosition();
                if(controlled && mousePos) {
                    var x = mousePos.x;
                    var y = mousePos.y;
                    var atan = Math.atan(y / x);
                    var rotation = x >= 0 ? atan : atan + Math.PI;
                    /*var targetGroup = target.getParent();*/

                    control.rotate(rotation - control.startRotation - (control.getAngle() / 2));
                }
            }, false);
        }
