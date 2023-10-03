let border_margin = 16;
let text_size = 16
async function setup() {
    createCanvas(w, h);
    textSize(16);
    background(150);
    fill(0);
    strokeWeight(0.3);
    stroke(0);
    fill(255);
    frameRate(45);
    drawRandomMap();
}
function draw() {
    //only works on devices where width > height
    if (h < w) {
        textSize(blockheight);
        fill(255);
        stroke(0);
        strokeWeight(3);
        checkuserinput();
        for(i = 0; health > i * 10; i++){
            textSize(16);
            text("❤️", border_margin + (20 * i), h - border_margin - text_size);
        }
    } else {
        let errortext = "Rotate your device please";
        fill(0);
        rect(0, 0, w, h);
        fill(255);
        textAlign(CENTER, CENTER);
        text(errortext, w / 2, h / 2);
    }
}
let rng;
function Tile(x, y) {
    let tiles = [];
    let weights = [];
    rng = new randS(seed + x * y + Math.pow(y));
    console.log(diffrentitems[rng.next(diffrentitems.length)])
    return diffrentitems[rng.next(diffrentitems.length)]
    // describes distribution array size (it affects on precision - you can use bigger value to get more precise results) => decreases preformance
    return randomItem(tiles, distribution);
}
function windowResized() {
    window.location.reload();
}