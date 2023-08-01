var  spaceShuttle , spaceShuttleImg
var bg, bgimg,star,starImg, comet, comet_img
var score
var starScore
function preload(){
spaceShuttleImg= loadImage("spaceShuttleImg.png")
bgimg = loadImage ("background.jpg")
starImg= loadImage ("star.png")
comet_img = loadImage ("comet.png")

}

function setup() {
  createCanvas (windowWidth,windowHeight)
 
 bg= createSprite (width/2, 450)
 bg.addImage("space",bgimg)
 spaceShuttle= createSprite (300, 450)
 spaceShuttle.addImage ("fly",spaceShuttleImg)
}
score=0
starScore= 0
function draw() {
 background ("black")
 
 
 if (keyDown("space")){
bg.velocityY= -12}
 spaceShuttle.y = World.mouseY
 spaceShuttle.x = World.mouseX
 
 if (bg.y < 0){
  bg.y = bg.width/2;
}


spawnStars ()
 spaeComets()
 

 drawSprites ()
 fill ("white")
 textSize (26)
 text ("score:"+score,100,100)
 text ("starScore:"+starScore,90,40)

 }



 function spawnStars (){
if (frameCount % 200 ===0){
  star= createSprite (600,0,40,10)
  //star.x= Math.round (randam(50,300))
  star.scale =0.2
  star.velocityY =3
  star.addImage(starImg) 
   star.x = Math.round (random(1,900))
}
 }
 function spaeComets (){
  if (frameCount % 500 === 0){
  comet = createSprite (705,0,50,30)
  comet.velocityY = 4
comet.addImage(comet_img)
comet.scale= 0.3
comet.x = Math.round(random (5,1000))
  }
 }




