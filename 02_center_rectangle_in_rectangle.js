const r = require("raylib");
const windowWidth = 500;
const windowHeight = 600;

const outerX = 100;
const outerY = 10;
const outerWidth = 300;
const outerHeight = 200;
const RED = r.RED;

const innerWidth = 100;
const innerHeight = 70;
const WHITE = r.WHITE;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Center_Rectangle_in_Rectangle");
    r.SetTargetFPS(50);
}

function update() { }

function coordinate(axis, outerMeasurement, innerMeasurement) {
    return axis + outerMeasurement / 2 - innerMeasurement / 2;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const innerX = coordinate(outerX, outerWidth, innerWidth);
    const innerY = coordinate(outerY, outerHeight, innerHeight);

    r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, RED);
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
