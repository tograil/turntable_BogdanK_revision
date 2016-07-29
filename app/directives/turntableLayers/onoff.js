function addOnOffLayer(stage, layer, params) {
    var group = new Konva.Group({
        x: 65,
        y: 290,
        offset: {
            x: 54,
            y: 8
        }
    });

    var off = new Konva.Image({
        x: 0,
        y: 30,
        image: params.off,
        width: 49,
        height: 37
    });

    var on = new Konva.Image({
        x:0,
        y: 30,
        image: params.on,
        width: 49,
        height: 37,
        visible: false

    });


    var blue_btn_off = new Konva.Image ({

         x: 222,
         y: -2,
         image: params.blue_Button_Off,

         width: 69,
         height: 65,

    });

    var blue_btn_on = new Konva.Image ({

     x: 222,
     y: -2,
     image: params.blue_Button_On,

     width: 69,
     height: 65,
     visible: false

    });

     var red_btn_off = new Konva.Image ({

          x: 0,
          y: -52,
          image: params.red_Button_Off,
          width: 71,
          height: 95,

     });

     var red_btn_on = new Konva.Image ({

      x: 0,
      y: -52,
      image: params.red_Button_On,

      width: 71,
      height: 95,
      visible: false

     });

    group.add(blue_btn_off);
    group.add(blue_btn_on);
    group.add(red_btn_on);
    group.add(red_btn_off);
    group.add(on);
    group.add(off);

    on.hide();

    off.on('mousedown', function () {

        params.start();
        off.hide();
        on.show();
        blue_btn_on.show();
        blue_btn_off.hide();
        red_btn_on.show();
        red_btn_off.hide();
        layer.draw();

    });

    on.on('mousedown', function () {
        params.stop();
        off.show();
        on.hide();
        blue_btn_on.hide();
        blue_btn_off.show();
        red_btn_on.hide();
        red_btn_off.show();
        layer.draw();
    });

    red_btn_off.on('mousedown', function(){

    params.start()
    red_btn_on.show();
    red_btn_off.hide();
    blue_btn_on.show();
    blue_btn_off.hide();

    });

   red_btn_on.on('mousedown', function(){

     params.stop();
     red_btn_on.hide();
     red_btn_off.show();
     blue_btn_on.hide();
     blue_btn_off.show();

    });

    stage.add(group);
}
