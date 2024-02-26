
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';

let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150}
]


// Get the canvas element
const gameCanvas = document.getElementById("gameCanvas");
// Return a two dimensional drawing context
const ctx = gameCanvas.getContext("2d");

// Start game
main();


/**
 * Main function of the game
 */
function main() {
    clearCanvas();
    drawSnake();
  
}

/**
 * Change the background colour of the canvas to CANVAS_BACKGROUND_COLOUR and
 * draw a border around it
 */
function clearCanvas() {
  //  Select the colour to fill the drawing
  ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
  //  Select the colour for the border of the canvas
  ctx.strokestyle = CANVAS_BORDER_COLOUR;

  // Draw a "filled" rectangle to cover the entire canvas
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  // Draw a "border" around the entire canvas
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}


/**
 * Draws the snake on the canvas
 */
function drawSnake() {
  // loop through the snake parts drawing each part on the canvas
  snake.forEach(drawSnakePart)
}


function drawSnakePart(snakePart) {
  // Set the colour of the snake part
  ctx.fillStyle = SNAKE_COLOUR;

  // Set the border colour of the snake part
  ctx.strokestyle = SNAKE_BORDER_COLOUR;

  // Draw a "filled" rectangle to represent the snake part at the coordinates
  // the part is located
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

  // Draw a border around the snake part
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

