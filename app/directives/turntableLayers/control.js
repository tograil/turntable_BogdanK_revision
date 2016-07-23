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


 control.on('mousemove', function (){

    var  controlled = true,
         mousePos = control.getPointerPosition();
         if (controlled && mousePos) {

              var x = mousePos.x - control.getX(),
                  y = mousePos.y - control.getY(),
                  atan = Math.atan(y/x),
                  rotation = x >= 0 ? atan : atan + Math.PI;
                  control.setRotation(rotation - control.startRotation - (control.getAngle() / 2));

/*
                  function rotateObject(object,degreeX=0, degreeY=0, degreeZ=0){

                     degreeX = (degreeX * Math.PI)/180;
                     degreeY = (degreeY * Math.PI)/180;
                     degreeZ = (degreeZ * Math.PI)/180;

                     object.rotateX(degreeX);
                     object.rotateY(degreeY);
                     object.rotateZ(degreeZ);

                  }

*/
         }
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
}
