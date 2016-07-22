function addRedButton (stage, layer, params) {


    var group = new Konva.Group ({

         x: 100,
         y: 100


    });

    var red_btn_off = new Konva.Image ({

         x: 100,
         y: 100,
         image: params.red_Button_Off,

         width: 10,
         height: 10

    });

    var red_btn_on = new Konva.Image ({

     x: 0,
     y: 0,
     image: params.red_Button_On,
     width:10,
     height:10,
     visible: false,

    });

    group.add(red_btn_off);
    group.add(red_btn_on);
red_btn_off.hide();

red_btn_off.on('mousedown', function (){

       red_btn_on.hide();
       red_btn_off.show();
       layer.draw();

});

red_btn_on.on('mousedown', function(){

       red_btn_on.show();
       red_btn_off.hide();
       layer.draw();


});



group.add(red_btn_off);
group.add(red_btn_on);
stage.add(group);

}
