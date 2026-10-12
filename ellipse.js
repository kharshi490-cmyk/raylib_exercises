const r = require("raylib");

function setup() {
    const world = {}
    world.width = 600;
    world.height = 600;
    world.title = "ellipse"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    return world;
}

function update(world) { }

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const x = 300;
    const y = 200;

    const points = 50;
    const radiusH = 200;
    const radiusV = 100;
    // r.DrawCircle(500, 200, 2, r.WHITE);
    // r.DrawCircle(300, 300, 2, r.WHITE);
    // r.DrawCircle(100, 200, 2, r.WHITE);
    // r.DrawCircle(300, 100, 2, r.WHITE);
    for (let i = 0; i < points; i++) {
        drawPoint(x, y, radiusH, radiusV, i, points);
    }

    r.EndDrawing();
}

function drawPoint(x, y, radiusH, radiusV, i, points) {
    const degrees = 360 / points;
    const radians = degrees * i * Math.PI / 180;
    const nextRadians = degrees * (i + 1) * Math.PI / 180
    const pointX = x + radiusH * Math.cos(radians);
    const pointY = y + radiusV * Math.sin(radians);
    r.DrawCircle(pointX, pointY, 5, r.WHITE);
    r.DrawLine(
        pointX,
        pointY,
        x + radiusH * Math.cos(nextRadians),
        y + radiusV * Math.sin(nextRadians),
        r.RED
    );
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}

main();
