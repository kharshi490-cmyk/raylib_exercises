const r = require("raylib");

function calMax(array) {
    let max = array[0];
    for (const ele of array) {
        max = Math.max(max, ele);
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

function calMaxHeight(world) {
    return world.height * 0.9;
}

function getDivision(max, maxHeight) {
    return maxHeight / max;
}

function setup() {
    const world = {}
    world.width = 600;
    world.height = 400;
    world.title = "bar chart"

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, world.title);
    r.SetTargetFPS(50);

    world.bgColor = {
        r: 241,
        g: 241,
        b: 242,
        a: 255,
    }

    world.data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
    // world.data = [10, 20, 30, 40, 50];
    // world.data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    // world.data = [100, 200, 300];

    world.max = calMax(world.data);
    world.average = calAverage(world.data);
    world.maxHeight = calMaxHeight(world);
    world.scaleValue = getDivision(world.max, world.maxHeight);

    world.barGraph = {
        width: 30,
        gap: 2
    }

    return world;
}

function update(world) { }

function calcY(world, ele) {
    return world.height - ele * world.scaleValue;
}

function drawGraph(world, i) {
    const graph = {
        x: (world.barGraph.width + world.barGraph.gap) * i + 10,
        y: calcY(world, world.data[i]),
        width: world.barGraph.width,
        height: world.data[i] * world.scaleValue,
    }

    r.DrawRectangleRec(graph, r.DARKBLUE);
}

function drawLine(world) {
    const startPos = {
        x: 0,
        y: calcY(world, world.average),
    }
    const endPos = {
        x: world.width,
        y: calcY(world, world.average),
    }

    r.DrawLineEx(startPos, endPos, 2, r.RED);
}

function drawGraphs(world) {
    for (let i = 0; i < world.data.length; i++) {
        drawGraph(world, i);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(world.bgColor);

    drawGraphs(world);
    drawLine(world);

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
