const r = require("raylib");
const g = require("./geometry");

const windowWidth = 500;
const windowHeight = 600;


function running() {
    return !r.WindowShouldClose();
}

function setup() {
    // prepare the sketch
    r.InitWindow(windowWidth, windowHeight, "Center_Rectangle_in_Rectangle");
    r.SetTargetFPS(50);
}

function update() {
    // change the state
}

function draw() {
    // draw the current state

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const outerX = 100;
    const outerY = 10;
    const outerWidth = 300;
    const outerHeight = 200;
    const RED = r.RED;

    r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, RED);

    const innerWidth = 100;
    const innerHeight = 70;
    const WHITE = r.WHITE;

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