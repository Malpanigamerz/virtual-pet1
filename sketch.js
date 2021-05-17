var dog, happydog;
var foodS, foodStock;
var database;
var dogImage1,dogImage2;

function preload()
{
	dogImage1 = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
	database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,50,50)
  foodStock=database.ref('Food');
  foodstock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  if (keyWentDown(UP_ARROW)) {
    writestock(foodS);
    dog.addImage(dogImage2);
  }
  drawSprites();
}

function realStock(data){
  foodS=data.val();
}

function writestock(x){
  
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  }
      )
}