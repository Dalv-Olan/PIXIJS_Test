const appHeader = new PIXI.Application(300, 100,  {backgroundColor : 0xbcbcbc});
const app = new PIXI.Application(800, 600,  {backgroundColor : 0xbcbcbc});
var log = console.log;
//var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});


document.body.appendChild(app.view);
app.stage.interactive = true;

var LeShapes = [];
var ShapeIndex = 0;


//var randomShape = new PIXI.Graphics();
app.stage.hitArea = new PIXI.Rectangle(0, 0, 800, 600);

var count = 0;

app.stage.on('pointerdown', onClick);
app.stage.on('pointerout', onOut);

//app.stage.on('mousemove', mouseMoveCallback);
//function mouseMoveCallback(mouseData2) {  console.log("X = "+mouseData2.data.originalEvent.movementX);  console.log("Y = "+mouseData2.data.originalEvent.movementY);}

function onOut(){
	app.stage.removeChild(LeShapes[ShapeIndex]);
	log("Out  = " + ShapeIndex);
}

    //var Shape = new PIXI.Graphics();
    //Shape.beginFill(0xFFFF0B);
	//Shape.moveTo(70,70);
	//Shape.lineTo(70 - 50, 70 + 100);
	//Shape.lineTo(70 + 50, 70 + 100);
	
	
	//LeShapes[ShapeIndex] = Shape;
	//Shape.hitArea = new PIXI.Rectangle;
	//Shape.interactive = true;
	//Shape.buttonMode = true;
	//Shape.cursor = 'wait';
	
	//app.stage.addChild(LeShapes[ShapeIndex]);

function onClick(mouseData) {

	
	var Shape = new PIXI.Graphics();
	var leX = mouseData.data.originalEvent.pageX;
	var leY = mouseData.data.originalEvent.pageY - (count * 7);
	
	
	Shape.beginFill(0xFFFF0B);
	Shape.moveTo(leX,leY);
	Shape.lineTo(leX - 50, leY + 100);
	Shape.lineTo(leX + 50, leY + 100);
	
	
	LeShapes[ShapeIndex] = Shape;
	//Shape.hitArea = new PIXI.Rectangle;
	Shape.interactive = true;
	Shape.buttonMode = true;
	//Shape.cursor = 'wait';
	Shape.endFill();
	
	

	app.stage.addChild(LeShapes[ShapeIndex]);
	app.stage.removeChild(LeShapes[ShapeIndex-2]);

	ShapeIndex += 1;
	//app.stage.addChild(LeShapes[ShapeIndex]);
    
        
    log("count = "+count);
    
    log("index = "+ShapeIndex);
    log("Shape  = " + LeShapes[ShapeIndex-1]);


}

for (var i = 0; i < ShapeIndex; i++) {
		LeShapes[i].on('pointerdown', onClickShape);
		log("YEEEEEE = ");
 	}
function onClickShape(){
	app.stage.removeChild(This);
}
app.ticker.add(function() {

    count += 0.1;

 	for (var i = 0; i < ShapeIndex; i++) {
		LeShapes[i].y = count * 7;
 	}
    


});



