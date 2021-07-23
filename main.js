
var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var birthday_x=0;
var birthday_y=0;
birthday_height=500;
birthday_width=600;
birthday_object="";
function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
    birthday_image_object=Img;

    birthday_image_object.scaleToWidth(700);
    birthday_image_object.scaleToHeight(510);
    birthday_image_object.set({
        left:0, top:0
    });
    canvas.add(birthday_image_object);
});
	
}

function playSound(){
	x.play();
}
