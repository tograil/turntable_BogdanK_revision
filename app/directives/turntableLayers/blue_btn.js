function addBlueButton (stage, layer, params) {


    var group = new Konva.Group ({

         x: 250,
         y: 315


    });

    var blue_btn_off = new Konva.Image ({

         x: 0,
         y: 0,

         image: params.blue_Button_Off,
         width: 75,
         height: this.width + 4,



    });

    var blue_btn_on = new Konva.Image ({

     x: 0,
     y: 0,
     image: params.blue_Button_On,
     width: 75,
     height: this.width + 4,
     visible: false



    });

    group.add(blue_btn_off);
    group.add(blue_btn_on);
    blue_btn_on.hide();

blue_btn_off.on('mousedown', function(){

blue_btn_off.hide();
blue_btn_on.show();
layer.draw();


});


blue_btn_on.on('mousedown', function(){

blue_btn_on.hide();
blue_btn_off.show();
layer.draw();

})



stage.add(group);

}
