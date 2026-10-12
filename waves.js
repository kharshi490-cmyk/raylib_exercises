const r = require("raylib");

function setup() {
    const world = {}
    world.width = 600;
    world.height = 400;
    world.title = "waves"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    return world;
}

function update(world) { }

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const x = 50;
    const y = 200;

    const points = 7;
    const radius = 150;

    r.DrawLine(x, 0, x, world.height, r.WHITE);
    r.DrawLine(0, world.height / 2, world.width, world.height / 2, r.WHITE);
    r.DrawCircle(x, y, 5, r.RED);
    r.DrawCircle(Math.sin(20 * Math.PI / 180), Math.sin(20 * Math.PI / 180), 5, r.RED);
    r.DrawCircle(Math.sin(40 * Math.PI / 180), Math.sin(40 * Math.PI / 180), 5, r.RED);
    // for (let i = 0; i < points; i++) {
    //     drawPoint(x, y, radius, i, points);
    // }

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
