const r = require("raylib");
const g = require("./geometry")

const windowWidth = 500;
const windowHeight = 600;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    // prepare the sketch
    r.InitWindow(windowWidth, windowHeight, "Center_Rectangle");
    r.SetTargetFPS(50);
}

function update() {
    // change the state
}

function draw() {
    // draw the current state
    const width = 200;
    const height = 100;
    const x = g.calcOffset(windowWidth, width);
    const y = g.calcOffset(windowHeight, height);
    const color = r.WHITE;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(x, y, width, height, color);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};