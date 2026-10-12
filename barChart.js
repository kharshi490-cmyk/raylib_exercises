const r = require("raylib");

function setup() {
    const world = {}
    world.width = 600;
    world.height = 400;
    world.title = "bar chart"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    return world;
}

function update(world) { }

function calMax(array) {
    let max = array[0];
    for (const ele of array) {
        if (max < ele) max = ele;
    }
    return max;
}

function calAverage(array) {
    let sum = 0;
    for (const ele of array) {
        sum += ele;
    }
    return sum / array.length;
}

function calScaleValue(max, maxHeight) {
    return maxHeight / max;
}

function drawGraph(windowHeight, barGraph, i, ele, scale) {
    const graph = {
        x: (barGraph.width + barGraph.gap) * i + 10,
        y: windowHeight - ele * scale,
        width: barGraph.width,
        height: ele * scale,
    }

    r.DrawRectangleRec(graph, r.DARKBLUE);
}

function calMaxHeight(world) {
    return (world.height * 90) / 100;
}

function draw(world) {
    const bgColor = {
        r: 241,
        g: 241,
        b: 242,
        a: 255,
    }
    r.BeginDrawing();
    r.ClearBackground(bgColor);

    // const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
    // const data = [10, 20, 30, 40, 50];
    // const data = [100, 200, 300];

    const max = calMax(data);
    const average = calAverage(data);
    const maxHeight = calMaxHeight(world);
    const scaleValue = calScaleValue(max, maxHeight);

    const barGraph = {
        width: 30,
        gap: 2
    }

    for (let i = 0; i < data.length; i++) {
        drawGraph(world.height, barGraph, i, data[i], scaleValue);
    }
    drawLine(world, average, scaleValue);

    r.EndDrawing();
}

function drawLine(world, average, scaleValue) {
    const startPos = {
        x: 0,
        y: world.height - average * scaleValue,
    }
    const endPos = {
        x: world.width,
        y: world.height - average * scaleValue,
    }

    r.DrawLineEx(startPos, endPos, 2, r.RED);
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
