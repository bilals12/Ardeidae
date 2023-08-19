let arcSize = 100;
let yStep = 10;
let padding = arcSize
let phi = 0;

function setup() {
    const canva = createCanvas(windowWidth * 0.55, windowHeight);
    canva.parent("landing-canva");
    frameRate(24);
}

function draw() {
    background('grey');
    noFill();
    stroke(245);

    for (let y = -padding; y < height + padding; y += yStep) {

        let sw1 = map(sin(radians(y + phi)), -1, 1, 2, yStep);
        strokeWeight(sw1)
        for (let x1 = - padding; x1 < width + padding; x1 += arcSize * 2) {
            arc(x1, y, arcSize, arcSize, 0, PI);
        }

        let sw2 = map(sin(radians(y - phi)), -1, 1, 2, yStep);
        strokeWeight(sw2)
        for (let x2 = - padding; x2 < width + padding; x2 += arcSize * 2) {
            arc(x2 + arcSize, y, arcSize, arcSize, PI, TWO_PI);

        }
    }
    phi++;
    phi++;
}