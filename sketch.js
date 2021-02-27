const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,sling
var gameState = "onSling";
var score=0
var bg
function preload()
{
 
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,400,1200,20)
    stand=new Ground(390,300,250,10)
    ball=new Ball(50,200,55)

    sling = new Sling(ball.body,{x:100, y:200});

    block1=new Box(300,275,30,40)
    block2=new Box(330,275,30,40)
    block3=new Box(360,275,30,40)
    block4=new Box(390,275,30,40)
    block5=new Box(420,275,30,40)
    block6=new Box(450,275,30,40)
    block7=new Box(480,275,30,40)
    block8=new Box(330,235,30,40)
    block9=new Box(360,235,30,40)
    block10=new Box(390,235,30,40)
    block11=new Box(420,235,30,40)
    block12=new Box(450,235,30,40)
    block13=new Box(360,195,30,40)
    block14=new Box(390,195,30,40)
    block15=new Box(420,195,30,40)
    block16=new Box(390,155,30,40)
  getBackgroundImg()  
}


function draw(){
    if(bg){
        background(bg);
    }
       
        Engine.update(engine)
        textSize(20)
        text("SCORE "+score,1000,40)
    ball.display()
    sling.display();
    fill("red")
    block1.display()
    fill("yellow")
    block2.display() 
    fill("pink")
    block3.display()
    fill("teal")
    block4.display()
    fill("orange")
    block5.display()
    fill("green")
    block6.display()
    fill("hotpink")
    block7.display()
    fill("purple")
    block8.display()
    fill("violet")
    block9.display()
    fill("magenta")
    block10.display()
    fill("seagreen")
    block11.display()
    fill("maroon")
    block12.display()
    fill("midnightblue")
    block13.display()
    fill("gold")
    block14.display()
    fill("brown")
    block15.display()
    fill("crimson")
    block16.display()
    stand.display()
    ground.display()
    block1.score()
    block2.score()
    block3.score()
    block4.score()
    block5.score()
    block6.score()
    block7.score()
    block8.score()
    block9.score()
    block10.score()
    block11.score()
    block12.score()
    block13.score()
    block14.score()
    block15.score()
    block16.score()
    
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32&&ball.body.speed<1){
       sling.attach(ball.body);
       Matter.Body.setPosition(ball.body, {x:200 , y:50});
       gameState="onSling"
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "lightblue";
    }
    else{
        bg = "navy";
    }

   
}