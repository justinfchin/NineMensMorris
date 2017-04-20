

//Stores Reference to Canvas
var canvas = document.getElementById("gameCanvas");

//Store 2D Rendering Content to Paint on Canvas
var ctx = canvas.getContext("2d");

    //Get Canvas Information
    var centerX = canvas.offsetWidth / 2;
    var centerY = canvas.offsetHeight / 2;
    var pixelBox = canvas.offsetHeight / 10;

//speed of movement
var dx = 2;
var dy = -2;
//Array for list of locations

//Listener for Click Events
//canvas.addEventListener('mousedown',onDown,false);


//1. keep track of objects
//2. keep track of canvas state
//3. mouse events
//4. draw objects as they are made and move around


var sizePieceShadow = pixelBox / 2 - 5;
var sizePiece = pixelBox / 2 - 10;
var colorPieceShadow = "#f5f5f5";
var colorPieceEmpty = "#808080";
var colorPiece1 = "#20B2AA";
var colorPiece2 = "#9ACD32";



var outerTopLeft = {x:centerX-3*pixelBox,y:centerY-3*pixelBox};
var outerMidLeft = {x:centerX-3*pixelBox,y:centerY};
var outerBotLeft = {x:centerX-3*pixelBox,y:centerY+3*pixelBox};
var outerTopCenter = {x:centerX,y:centerY-3*pixelBox};
var outerBotCenter = {x:centerX,y:centerY+3*pixelBox};
var outerTopRight = {x:centerX+3*pixelBox,y:centerY-3*pixelBox};
var outerMidRight = {x:centerX+3*pixelBox,y:centerY};
var outerBotRight = {x:centerX+3*pixelBox,y:centerY+3*pixelBox};
var middleTopLeft = {x:centerX-2*pixelBox,y:centerY-2*pixelBox};
var middleMidLeft = {x:centerX-2*pixelBox,y:centerY};
var middleBotLeft = {x:centerX-2*pixelBox,y:centerY+2*pixelBox};
var middleTopCenter = {x:centerX,y:centerY-2*pixelBox};
var middleBotCenter = {x:centerX,y:centerY+2*pixelBox};
var middleTopRight = {x:centerX+2*pixelBox,y:centerY-2*pixelBox};
var middleMidRight = {x:centerX+2*pixelBox,y:centerY};
var middleBotRight = {x:centerX+2*pixelBox,y:centerY+2*pixelBox};
var innerTopLeft = {x:centerX-pixelBox,y:centerY-pixelBox};
var innerMidLeft = {x:centerX-pixelBox,y:centerY};
var innerBotLeft = {x:centerX-pixelBox,y:centerY+pixelBox};
var innerTopCenter = {x:centerX,y:centerY-pixelBox};
var innerBotCenter = {x:centerX,y:centerY+pixelBox};
var innerTopRight = {x:centerX+pixelBox,y:centerY-pixelBox};
var innerMidRight = {x:centerX+pixelBox,y:centerY};
var innerBotRight = {x:centerX+pixelBox,y:centerY+pixelBox};


var validLoc = [
    outerTopLeft,outerMidLeft,outerBotLeft,
    outerTopCenter,outerBotCenter,outerTopRight,
    outerMidRight,outerBotRight,middleTopLeft,
    middleMidLeft,middleBotLeft,middleTopCenter,
    middleBotCenter,middleTopRight,middleMidRight,
    middleBotRight,innerTopLeft,innerMidLeft,
    innerBotLeft,innerTopCenter,innerBotCenter,
    innerTopRight,innerMidRight,innerBotRight

];
window.onload = function() {



    drawBoard();
    //test only
  //  drawPiece()
    var testPiece = new Piece(150,150,sizePiece,"yellow");
    testPiece.draw();
    testPiece.move(250,150);
};


function drawBoard () {

    //Draw Squares
    ctx.beginPath();
    ctx.strokeStyle = "#808080";
    ctx.lineWidth = 3;

    //Inner Square
    ctx.strokeRect(centerX-pixelBox,centerY-pixelBox,2*pixelBox,2*pixelBox);
    //Middle Square
    ctx.strokeRect(centerX-2*pixelBox,centerY-2*pixelBox,4*pixelBox,4*pixelBox);
    //Outer Square
    ctx.strokeRect(centerX-3*pixelBox,centerY-3*pixelBox,6*pixelBox,6*pixelBox);

    //Draw Connecting Lines
    //North Line
    ctx.moveTo(centerX,centerY-pixelBox); //defines starting point of line 1
    ctx.lineTo(centerX,centerY-3*pixelBox); //ending point of line 1
    //East Line
    ctx.moveTo(centerX+pixelBox,centerY); //defines starting point of line 1
    ctx.lineTo(centerX+3*pixelBox,centerY); //ending point of line 1
    //South Line
    ctx.moveTo(centerX,centerY+pixelBox);
    ctx.lineTo(centerX,centerY+3*pixelBox);
    //West Line
    ctx.moveTo(centerX-pixelBox,centerY);
    ctx.lineTo(centerX-3*pixelBox,centerY);
    //Draw the Lines
    ctx.stroke();

    //Draw Valid Locations
    for (var i = 0; i < validLoc.length; i++){
        ctx.beginPath();
        ctx.arc(validLoc[i].x,validLoc[i].y,sizePieceShadow,0,2*Math.PI);
        ctx.fillStyle = colorPieceShadow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(validLoc[i].x,validLoc[i].y,sizePiece,0,2*Math.PI);
        ctx.strokeStyle = colorPieceEmpty;
        ctx.stroke();

    }
}



/*

function storePiece(x,y,radius) {
    //Stores the Position of Piece
    this.top = y - radius;
    this.right = x + radius;
    this.bottom = y + radius;
    this.left = x - radius;
}


function getMousePos(event){
    var canvasPos = canvas.getBoundingClientRect();
    return {
        x: event.clientX - canvasPos.left,
        y: event.clientY - canvasPos.top
    };
}

function onDown(event){
    x = getMousePos(event).x;
    y = getMousePos(event).y;
    alert(x+' '+y);
}
*/

function CanvasState(){

}


//Piece Object
function Piece(x,y,radius,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    //Draws the Piece
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    //Moves the Piece
    this.move = function(newX,newY){
        while(this.x !== newX || this.y!== newY){
            if (this.y > y){
                this.y -= dy;
            } else if (this.y < newY) {
                this.y += dy;
            } else if (this.x > newX) {
                this.x -= dx;
            } else if (this.x < newX) {
                this.x += dx;
                                alert("here");

            } else alert("Check Move Function");


            this.draw();
        }
    };

    //Determine if a point is inside the shape's bounds
    this.contains = function(newX,newY){
        return (newX*newX + newY*newY < this.radius * this.radius);
    }
}