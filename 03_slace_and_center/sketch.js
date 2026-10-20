const r = require("raylib");
const g = require("./geometry");

const windowWidth = 500;
const windowHeight = 600;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    // prepare the sketch
    r.InitWindow(windowWidth, windowHeight, "scale_and_center");
    r.SetTargetFPS(50);
}

function update() {
    // change the state
}

function draw() {
    // draw the current state
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
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, RED);

    const innerX = outerX + g.calcOffset(outerWidth, innerWidth);
    const innerY = outerY + g.calcOffset(outerHeight, innerHeight);

    r.DrawRectangle(innerX, innerY, innerWidth, innerHeight, WHITE);

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