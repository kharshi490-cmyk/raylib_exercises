const r = require("raylib");

function setup() {
    const world = {}
    world.width = 400;
    world.height = 400;
    world.title = "polygon"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    return world;
}

function update(world) { }

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const x = 200;
    const y = 200;

    const points = 7;
    const radius = 150;
    r.DrawCircleLines(x, y, radius, r.BLUE);
    for (let i = 0; i < points; i++) {
        drawPoint(x, y, radius, i, points);
    }

    r.EndDrawing();
}

function drawPoint(x, y, radius, i, points) {
    const degrees = 360 / points;
    const radians = degrees * i * Math.PI / 180;
    const nextRadians = degrees * (i + 1) * Math.PI / 180
    const pointX = x + radius * Math.cos(radians);
    const pointY = y + radius * Math.sin(radians);
    r.DrawCircle(pointX, pointY, 5, r.WHITE);
    r.DrawLine(
        pointX,
        pointY,
        x + radius * Math.cos(nextRadians),
        y + radius * Math.sin(nextRadians),
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
