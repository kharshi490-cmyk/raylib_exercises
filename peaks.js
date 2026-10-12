const r = require("raylib");

function simpleData() {
    // return [10, 20, 50, 40, 50, 60, 80, 80, 90, 10, 2, 56, 9]
    return [12, 45, 78, 23, 100, 56, 34, 67, 89, 40]
}

function getMax(array) {
    let max = array[0];
    for (const ele of array) {
        max = Math.max(max, ele);
    }
    return max;
}

function calcMaxHeight(w) {
    return w.height * 0.9;
}

function calcScaleValue(max, maxHeight) {
    return maxHeight / max;
}

function isBetween(array, i) {
    return array[i - 1] < array[i] && array[i + 1] < array[i];
}

function getPeakPoints(array) {
    const peakPoints = [];
    for (let i = 1; i < array.length - 1; i++) {
        if (isBetween(array, i)) {
            const peak = { point: array[i], i: i };
            peakPoints.push(peak);
        }
    }
    return peakPoints;
}

function setup() {
    const world = {}
    world.width = 600;
    world.height = 400;
    world.title = "peaks"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    world.data = simpleData();

    world.max = getMax(world.data);
    world.maxHeight = calcMaxHeight(world);
    world.scaleV = calcScaleValue(world.max, world.maxHeight);
    world.peakPoints = getPeakPoints(world.data);

    world.scaleH = 50;

    return world;
}

function update(world) { }

function drawLine(w, i) {
    const startPos = {
        x: calcX(w.scaleH, i),
        y: calcY(w.height, w.data[i], w.scaleV),
    }
    const endPos = {
        x: calcX(w.scaleH, i + 1),
        y: calcY(w.height, w.data[i + 1], w.scaleV),
    }

    r.DrawLineV(startPos, endPos, r.BLACK);
}

function calcY(height, ele, scaleV) {
    return height - ele * scaleV;
}

function calcX(scaleH, i) {
    return scaleH * i;
}

function drawLineGraph(w) {
    for (let i = 0; i < w.data.length - 1; i++) {
        drawLine(w, i);
    }
}

function drawPeaks(w) {
    for (let i = 0; i < w.peakPoints.length; i++) {
        const pos = {
            x: calcX(w.scaleH, w.peakPoints[i].i),
            y: calcY(w.height, w.peakPoints[i].point, w.scaleV),
        }
        const radius = 5;

        r.DrawCircleV(pos, radius, r.RED);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

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
