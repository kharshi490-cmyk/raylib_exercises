const r = require("raylib");

const windowWidth = 800;
const windowHeight = 800;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "intersecting_circles");
    r.SetTargetFPS(50);
}

function update() { }

const circle1X = 100;
const circle1Y = 100;
const radius1 = 50;

const circle2X = 170;
const circle2Y = 100;
// const radius2 = 50;
// const radius2 = 20;
const radius2 = 17;

function circlecolor(distance, totalRadius) {
    if (distance <= totalRadius) {
        return r.RED;
    }
    return r.BLACK;
}

function sqr(x) {
    return x * x;
}

const distance = (sqr(circle2X - circle1X) + sqr(circle2Y - circle1Y)) ** 0.5;
const radius = radius1 + radius2;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const color = circlecolor(distance, radius);
    r.DrawCircle(circle1X, circle1Y, radius1, color);
    r.DrawCircle(circle2X, circle2Y, radius2, color);

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
