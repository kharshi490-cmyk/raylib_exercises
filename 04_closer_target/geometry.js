function sqr(x) {
    return x * x;
}

function distance(x1, x2, y1, y2) {
    return (sqr(x2 - x1) + sqr(y2 - y1)) ** 0.5;
}

function coordinate(t1_distance, t2_distance, t1, t2) {
    return t1_distance < t2_distance ? t1 : t2;
}

module.exports = {
    distance,
    coordinate,
}