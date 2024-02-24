
    const SNAKE_COLOUR = 'lightgreen';
    const SNAKE_BORDER_COLOUR = 'darkgreen';
    const CANVAS_BORDER_COLOUR = 'black';
    const CANVAS_BACKGROUND_COLOUR = "white";


    // Get the canvas element
    const gameCanvas = document.getElementById("gameCanvas");
    // Return a two dimensional drawing context
    const ctx = gameCanvas.getContext("2d");
    

    main();


    let snake = [
        {x: 150, y: 150},
        {x: 140, y: 150},
        {x: 130, y: 150},
        {x: 120, y: 150},
        {x: 110, y: 150}
    ]


    function main() {
        clearCanvas();
        drawSnake();

    }

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


    function drawSnake() {  
        snake.forEach(drawSnakePart);
    }

    function drawSnakePart(snakePart) {  
        // Set the colour of the snake part
        ctx.fillStyle = SNAKE_COLOUR;

        // Set the border colour of the snake part
        ctx.strokestyle = SNAKE_BORDER_COLOUR;

        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
