const r = require("raylib");

function setup() {
    const world = {}
    world.width = 600;
    world.height = 600;
    world.title = "angle"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    return world;
}

function update(world) { }

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const start = { x: 100, y: 300 }
    const end = { x: 350, y: 150 }
    const hypotenuse = ((end.x - start.x) ** 2 + (end.y - start.y) ** 2) ** 0.5;
    const opposite = ((end.x - end.x) ** 2 + (end.y - start.y) ** 2) ** 0.5;

    const radians = Math.asin(Math.sin(opposite / hypotenuse));
    const degrees = radians * 180 / Math.PI;

    r.DrawCircleV(start, 3, r.WHITE);
    r.DrawCircleV(end, 3, r.WHITE);
    r.DrawLineV(start, end, r.BLUE);

    r.DrawLine(start.x, start.y, end.x, start.y, r.RED);
    r.DrawLine(end.x, start.y, end.x, end.y, r.RED);
    r.DrawText("Angle " + degrees, 20, 10, 30, r.PINK);

    r.EndDrawing();
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
