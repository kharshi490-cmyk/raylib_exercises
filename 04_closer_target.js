const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 1000;

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

const YELLOW = r.YELLOW;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "closer_target");
    r.SetTargetFPS(50);
}

function update() { }

function sqr(x) {
    return x * x;
}

function distance(sourceX, sourceY, targetX, targetY) {
    return (sqr(targetX - sourceX) + sqr(targetY - sourceY)) ** 0.5;
}

function coordinate(target1Distance, target2Distance, target1, target2) {
    return target1Distance < target2Distance ? target1 : target2;
}

const target1Distance = distance(sourceX, sourceY, target1X, target1Y);
const target2Distance = distance(sourceX, sourceY, target2X, target2Y);

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircle(sourceX, sourceY, radius, WHITE);
    r.DrawText("Source", sourceX - radius, sourceY + radius, 20, WHITE);

    r.DrawCircle(target1X, target1Y, radius1, RED);
    r.DrawCircle(target2X, target2Y, radius2, BLUE);

    const destinationX = coordinate(target1Distance, target2Distance, target1X, target2X);
    const destinationY = coordinate(target1Distance, target2Distance, target1Y, target2Y);

    r.DrawLine(sourceX, sourceY, destinationX, destinationY, YELLOW);

    const destination2_x = coordinate(target1Distance, target2Distance, target2X, target1X);
    const destitation2_y = coordinate(target1Distance, target2Distance, target2Y, target1Y);

    if (target1Distance === target2Distance)
        r.DrawLine(sourceX, sourceY, destination2_x, destitation2_y, YELLOW);

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
