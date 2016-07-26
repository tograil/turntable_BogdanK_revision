function addBlueRedButton (stage, layer, params) {


    var group = new Konva.Group ({

         x: 142,
         y: 285


    });

    var blue_btn_off = new Konva.Image ({

         x: 26,
         y: -30,

         image: params.blue_Button_Off,
         width: 75,
         height: this.width + 4,



    });

    var blue_btn_on = new Konva.Image ({

     x: 26,
     y: -30,
     image: params.blue_Button_On,
     width: 75,
     height: this.width + 4,
     visible: false

});
     var red_btn_off = new Konva.Image ({

          x: -182,
          y: -90,
          image: params.red_Button_Off,

          width: 71,
          height: this.width + 4,



     });

     var red_btn_on = new Konva.Image ({

      x: -182,
      y: -90,
      image: params.red_Button_On,
      width: 71,
      height: this.width + 4,
      visible: false

     });





    group.add(blue_btn_off);
    group.add(blue_btn_on);
    group.add(red_btn_on);
    group.add(red_btn_off);
    blue_btn_on.hide();
    red_btn_on.hide();

red_btn_off.on('mousedown', function(){

blue_btn_off.hide();
blue_btn_on.show();
red_btn_on.show();
red_btn_off.hide()
layer.draw();


});


red_btn_on.on('mousedown', function(){

blue_btn_on.hide();
blue_btn_off.show();
red_btn_on.hide();
red_btn_off.show();
layer.draw();

})



stage.add(group);

}
