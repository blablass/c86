canvas = new fabric.Canvas("myCanvas");
playerx = 10;
playery = 100;
block_width = 30;
block_height = 30;
player_object = "";
block_object = "";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
           top:playery,left:playerx
        });
        canvas.add(player_object);
        
    });
}
 function blockupdate(newImg){
    fabric.Image.fromURL(newImg,function(Img){
        block_object = Img;  
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:playery,left:playerx

        });
        canvas.add(block_object);
    });
 }
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
keypressed = e.keyCode;
console.log(keypressed);
if(e.shiftKey== true && keypressed == '80'){
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if(e.shiftKey== true && keypressed == '77' && block_width>0){
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if(keypressed =='37'){
    left()
}
if(keypressed =='38'){
    up()
}
if(keypressed =='39'){
    right()
}
if(keypressed =='40'){
    down()
}
if(keypressed =='67'){
    blockupdate("cloud.jpg");
}
if(keypressed =='68'){
    blockupdate("dark_green.png");
}
if(keypressed =='71'){
    blockupdate("ground.png");
}
if(keypressed =='82'){
    blockupdate("roof.jpg");
}
if(keypressed =='84'){
    blockupdate("trunk.jpg");
}
if(keypressed =='85'){
    blockupdate("unique.png");
}
if(keypressed =='87'){
    blockupdate("wall.jpg");
}
if(keypressed =='89'){
    blockupdate("yellow_wall.png");
}
}
function up(){
    if(playery >= 0){
        playery = playery - block_height
        canvas.remove(player_object)
        playerupdate()
    }
}
function down(){
    if(playery <= 700){
        playery = playery + block_height
        canvas.remove(player_object)
        playerupdate()
    }
}
function left(){
    if(playerx >= 0){
        playerx = playerx - block_width
        canvas.remove(player_object)
        playerupdate()
    }
}
function right(){
    if(playerx <= 900){
        playerx = playerx + block_width
        canvas.remove(player_object)
        playerupdate()
    }
}
