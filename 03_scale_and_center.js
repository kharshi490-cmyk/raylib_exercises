const r = require("raylib");
const windowWidth = 500;
const windowHeight = 600;

const outerX = 100;
const outerY = 10;
const outerWidth = 300;
const outerHeight = 200;
const RED = r.RED;

const width = 0.6;
const height = 0.4;
const innerWidth = width * outerWidth;
const innerHeight = height * outerHeight;
const WHITE = r.WHITE;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "scale_and_center");
    r.SetTargetFPS(50);
}

function update() { }

function coordinate(axis, outerMeasurement, innerMeasurement) {
    return axis + outerMeasurement / 2 - innerMeasurement / 2;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, RED);

    const innerX = coordinate(outerX, outerWidth, innerWidth);
    const innerY = coordinate(outerY, outerHeight, innerHeight);

    r.DrawRectangle(innerX, innerY, innerWidth, innerHeight, WHITE);

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
