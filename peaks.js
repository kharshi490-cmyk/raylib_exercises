const r = require("raylib");

function setup() {
    const world = {}
    world.width = 600;
    world.height = 400;
    world.title = "peaks"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    world.data = [10, 20, 50, 40, 50, 60, 80, 80, 90, 10, 2, 56, 9];
    // world.data = [10, 20, 30, 40, 50];
    // world.data = [12, 45, 78, 23, 100, 56, 34, 67, 89, 40];
    // world.data = [100, 200, 300];

    world.max = getMax(world.data);
    world.maxHeight = calMaxHeight(world);
    world.scaleV = calScaleValue(world.max, world.maxHeight);
    world.peakPoints = getPeakPoints(world.data);
    console.log(world.peakPoints);

    world.scaleH = 50;

    return world;
}

function update(world) { }

function getMax(array) {
    let max = array[0];
    for (const ele of array) {
        if (max < ele) max = ele;
    }
    return max;
}

function calMaxHeight(w) {
    return (w.height * 90) / 100;
}

function calScaleValue(max, maxHeight) {
    return maxHeight / max;
}

function getPeakPoints(array) {
    const peakPoints = [];
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
            const peak = { point: array[i], i: i };
            peakPoints.push(peak);
        }
    }
    return peakPoints;
}

function drawLine(w, i) {
    const startPos = {
        x: w.scaleH * i,
        y: w.height - w.data[i] * w.scaleV,
    }
    const endPos = {
        x: w.scaleH * (i + 1),
        y: w.height - w.data[i + 1] * w.scaleV,
    }

    r.DrawLineV(startPos, endPos, r.BLACK);
}

function drawLineGraph(w) {
    for (let i = 0; i < w.data.length - 1; i++) {
        drawLine(w, i);
    }
}

function drawPeaks(w) {
    for (let i = 0; i < w.peakPoints.length; i++) {
        const pos = {
            x: w.scaleH * w.peakPoints[i].i,
            y: w.height - w.peakPoints[i].point * w.scaleV,
        }
        const radius = 5;

        r.DrawCircleV(pos, radius, r.RED);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.GRAY);

    drawLineGraph(world);
    drawPeaks(world);

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
