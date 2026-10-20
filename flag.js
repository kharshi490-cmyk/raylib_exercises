const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "practice",
        FPS: 50,
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.FPS);

    const world = {
        screen,
    }
    return world;
}

function drawPoint(x, y, radius, i, points) {
    const degrees = 360 / points;
    const radians = degrees * i * Math.PI / 180;
    const nextRadians = degrees * (i + 12) * Math.PI / 180
    const pointX = x + radius * Math.cos(radians);
    const pointY = y + radius * Math.sin(radians);
    r.DrawCircleLines(100, 100, radius, r.BLUE);
    r.DrawLine(
        pointX,
        pointY,
        x + radius * Math.cos(nextRadians),
        y + radius * Math.sin(nextRadians),
        r.BLUE
    );
}

function draw(world) {
    const target = r.LoadRenderTexture(200, 200);

    const x = 100;
    const y = 100;

    const points = 24;
    const radius = 50;


    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircleSector({ x: 100, y: 100 }, 150, 0, 120, 150, r.ORANGE);
    r.DrawCircleSector({ x: 100, y: 100 }, 150, 120, 240, 150, r.WHITE);
    r.DrawCircleSector({ x: 100, y: 100 }, 150, 240, 360, 150, r.GREEN);

    r.DrawCircleLines(x, y, radius, r.BLUE);
    for (let i = 0; i < points / 2; i++) {
        drawPoint(x, y, radius, i, points);
    }

    // r.DrawCircle(100, 100, 15, r.BLUE);

    r.EndTextureMode();

    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTexture(target.texture, 300, 50, r.WHITE);
    r.DrawTexture(target.texture, 550, 50, r.WHITE);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup()
    loop(world);
}
main();