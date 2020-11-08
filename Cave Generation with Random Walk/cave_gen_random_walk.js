
// Gets the canvas from the HTML document.
var canvas = document.getElementById("canvas").getContext("2d");

// Initialises the map width and height.
let map_size_x = 64;
let map_size_y = 64;

// A two dimensional array of coordinates.
var cells = [];

// Initialises the cells array so that it can work in two dimensions. Sets each cell to its default wall state.
for (let x = 0; x < map_size_x; x++) {
    cells[x] = [];
    for (let y = 0; y < map_size_y; y++) {
        cells[x][y] = 0;
    }
}

// Manages the flow of the program. First creates the cave, then renders it.
create_cave();
render_cave();

// Creates the cave by running the random walk algorithm.
function create_cave() {

    let x = map_size_x / 2;
    let y = map_size_y / 2;

    for (let i = 0; i <= 2000; i++) {

        cells[x][y] = 1;

        switch (Math.floor(Math.random() * 4)) {
            case 0: { y++; break; }
            case 1: { x++; break; }
            case 2: { y--; break; }
            case 3: { x--; break; }
        }

        x = Math.max(1, Math.min(x, map_size_x - 2));
        y = Math.max(1, Math.min(y, map_size_y - 2));
    }
}

// Renders the cave by looping through each cell and drawing a square.
function render_cave() {

    for (let x = 0; x < map_size_x; x++)
        for (let y = 0; y < map_size_y; y++) {

            switch (cells[x][y]) {
                case 0: { canvas.fillStyle = "rgb(066, 071, 076)"; break; }
                case 1: { canvas.fillStyle = "rgb(251, 116, 106)"; break; }
            }

            canvas.fillRect(x * 8, y * 8, 8, 8);
        }
}