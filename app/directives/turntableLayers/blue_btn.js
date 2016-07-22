function addBlueButton (stage, layer, params) {


    var group = new Konva.Group ({

         x: 0,
         y: 0


    });

    var blue_btn_off = new Konva.Image ({

         x: 0,
         y: 0,

         image: params.blue_Button_Off,
         width: 10,
         height: 10

    });

    var blue_btn_on = new Konva.Image ({

     x: 0,
     y: 0,
     image: params.blue_Button_On,
     width: 10,
     height: 10,
     visible: false

    });

/*blue_btn_on.hide();*/

blue_btn_off.on('mousedown', function(){

blue_btn_off.show();
blue_btn_off.hide();
layer.draw();


});


blue_btn_on.on('mousedown', function(){

blue_btn_on.show();
blue_btn_off.hide();
layer.draw();

})


group.add(blue_btn_off);
group.add(blue_btn_on);
stage.add(group);

}
