const r = require("raylib");

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
    // const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    // const data = [10, 20, 30, 40, 50];
    // const data = [100, 200, 300];

    world.max = calMax(data);
    world.average = calAverage(data);
    world.maxHeight = calMaxHeight(world);
    world.scaleValue = calScaleValue(world.max, world.maxHeight);

    world.barGraph = {
        width: 30,
        gap: 2
    }

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

function calMaxHeight(world) {
    return (world.height * 90) / 100;
}

function calScaleValue(max, maxHeight) {
    return maxHeight / max;
}

function drawGraph(world, i, ele) {
    const graph = {
        x: (world.barGraph.width + world.barGraph.gap) * i + 10,
        y: world.height - ele * world.scaleValue,
        width: world.barGraph.width,
        height: ele * world.scaleValue,
    }

    r.DrawRectangleRec(graph, r.DARKBLUE);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(world.bgColor);

    // // const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    // const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
    // // const data = [10, 20, 30, 40, 50];
    // // const data = [100, 200, 300];

    // const max = calMax(data);
    // const average = calAverage(data);
    // const maxHeight = calMaxHeight(world);
    // const scaleValue = calScaleValue(max, maxHeight);

    // const barGraph = {
    //     width: 30,
    //     gap: 2
    // }

    for (let i = 0; i < data.length; i++) {
        drawGraph(world, i, data[i]);
    }
    drawLine(world);

    r.EndDrawing();
}

function drawLine(world) {
    const startPos = {
        x: 0,
        y: world.height - world.average * world.scaleValue,
    }
    const endPos = {
        x: world.width,
        y: world.height - world.average * world.scaleValue,
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
