const r = require("raylib");
const g = require("./geometry");

const windowWidth = 1000;
const windowHeight = 1000;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    // prepare the sketch
    r.InitWindow(windowWidth, windowHeight, "closer_target");
    r.SetTargetFPS(50);
}

function update() {
    // change the state
}

function draw() {
    // draw the current state
    const sourceX = 100;
    const sourceY = 400;
    const radius = 50;
    const WHITE = r.WHITE;

    const target1X = 400;
    const target1Y = 200;
    const radius1 = 50;
    const RED = r.RED;

    const target2X = 400;
    const target2Y = 600;
    const radius2 = 50;
    const BLUE = r.BLUE;

    const target1Distance = g.distance(sourceX, sourceY, target1X, target1Y);
    const target2Distance = g.distance(sourceX, sourceY, target2X, target2Y);

    const YELLOW = r.YELLOW;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircle(sourceX, sourceY, radius, WHITE);
    r.DrawText("Source", sourceX - radius, sourceY + radius, 20, WHITE);

    r.DrawCircle(target1X, target1Y, radius1, RED);
    r.DrawCircle(target2X, target2Y, radius2, BLUE);

    const destinationX = g.coordinate(target1Distance, target2Distance, target1X, target2X);
    const destinationY = g.coordinate(target1Distance, target2Distance, target1Y, target2Y);

    r.DrawLine(sourceX, sourceY, destinationX, destinationY, YELLOW);

    const destination2_x = g.coordinate(target1Distance, target2Distance, target2X, target1X);
    const destitation2_y = g.coordinate(target1Distance, target2Distance, target2Y, target1Y);

    if (target1Distance === target2Distance)
        r.DrawLine(sourceX, sourceY, destination2_x, destitation2_y, YELLOW);

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