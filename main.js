var canvas=new fabric.Canvas('my_canvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var playerobject="";
var blockobject="";
function player_update(){
    fabric.Image.fromURL("player.jpeg",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:player_y,left:player_x
        });
        canvas.add(playerobject);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(block_width);
        playerobject.scaleToHeight(block_height);
        playerobject.set({
            top:player_y,left:player_x
        });
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p and shift pressed together");
        block_width=block_width+10
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("m and shift pressed together");
        block_width=block_width-10
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypressed=='38'){
        up();
        console.log("up");
       }
       if(keypressed=='37'){
           left();
           console.log("left");
          }
          if(keypressed=='39'){
           right();
           console.log("right");
          }
          if(keypressed=='40'){
           down();
           console.log("down");
          }
          if(keypressed=='87'){
           new_image("Screenshot 2021-05-21 at 7.47.27 PM.png");
           console.log("w");
          }
          if(keypressed=='71'){
           new_image("Screenshot 2021-05-21 at 7.49.54 PM.png");
           console.log("g");
          }
          if(keypressed=='76'){
           new_image("Screenshot 2021-05-21 at 7.52.39 PM.png");
           console.log("l");
          }
          if(keypressed=='84'){
           new_image("Screenshot 2021-05-21 at 7.54.04 PM.png");
           console.log("t");
          }
          if(keypressed=='82'){
           new_image("Screenshot 2021-05-21 at 7.58.53 PM.png");
           console.log("r");
          }
          
}