var canvas = new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x= 10;
player_y= 10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypressed = e.keyCode;
    if(e.shiftKey==true && keypressed == "80"){
        block_image_height= block_image_height + 10;
        block_image_width= block_image_width + 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keypressed == "77"){
        block_image_height= block_image_height - 10;
        block_image_width= block_image_width  - 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keypressed == "38"){
        up();
    }
    if (keypressed == "40"){
        down();
    }if (keypressed == "37"){
        left();
    }if (keypressed == "39"){
        right();
    }
    if (keypressed == "71"){
        block_update("ground.png")
    }
}

function up(){
    if(player_y>=0){
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<= 250){
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}function left(){
    if(player_x>=0){
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}function right(){
    if(player_x>=500){
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
