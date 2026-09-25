const r = require("raylib");

const width = 200;
const height = 100;
const color = r.WHITE;
const windowWidth = 500;
const windowHeight = 600;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Center_Rectangle");
    r.SetTargetFPS(50);
}

function update() { }
function coordinate(windowMeasurement, recMeasurement) {
    return windowMeasurement / 2 - recMeasurement / 2;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const x = coordinate(windowWidth, width);
    const y = coordinate(windowHeight, height);

    r.DrawRectangle(x, y, width, height, color);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
