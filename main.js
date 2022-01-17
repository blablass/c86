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
playerupdate()
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
 blockupdate("trunk.jpg")
