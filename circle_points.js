const r = require("raylib");

function setup() {
    const world = {}
    world.width = 400;
    world.height = 400;
    world.title = "circle points"

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

    const points = 12;
    const radius = 150;
    r.DrawCircle(x, y, radius, r.BLUE);
    for (let i = 0; i < points; i++) {
        drawPoint(x, y, radius, i, points);
    }

    r.EndDrawing();
}

function drawPoint(x, y, radius, i, points) {
    const degrees = 360 / points * i;
    const radians = degrees * Math.PI / 180;
    const pointX = x + radius * Math.cos(radians);
    const pointY = y + radius * Math.sin(radians);
    r.DrawCircle(pointX, pointY, 5, r.WHITE);
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
