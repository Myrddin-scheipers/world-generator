let w = window.innerWidth;
let h = window.innerHeight;
let running = false;
let position = [0, 0]//left & top ::
let prevkey;
let lastDirection = "down";
let buttons = [];
if (w > 1920) {
    w = 1020;
}
let blockwidth = Math.round((Math.sqrt(w) + 1) / 2) * 2;
if (h > 1080) {
    h = 1080;
}
let blockheight = Math.round((Math.sqrt(h) + 1) / 2) * 2;
let diffrentitems = [{
    chance: 100,
    r: 200,
    g: 200,
    b: 20,
    object: "block",
    name: "savanna_grass",
}, {
    chance: 100,
    r: 0,
    g: 145,
    b: 0,
    object: "block",
    name: "forest_grass",
}, {
    chance: 100,
    r: 0,
    g: 100,
    b: 0,
    object: "block",
    name: "dark_grass",
},
{
    chance: 10,
    r: 132,
    g: 136,
    b: 137,
    object: "block",
    name: "stone",
},
{
    chance: 1,
    r: 0,
    g: 0,
    b: 0,
    object: "chest",
    name: "chest",
}]
let viewlist = [];
let map = [];
let health = 100;


class Blocks {
    constructor(red, green, blue, object) {
        this.r = red;
        this.g = green;
        this.b = blue;
        this.blocktype = object;
    }
    static setblocks() {
        fill(map[map.length - 1].r, map[map.length - 1].g, map[map.length - 1].b);
        return map[map.length - 1];
    }
    static drawblock(i, j, type, colors, texture) {
        fill(colors.r, colors.g, colors.b);
        if(texture){
            fill(0)
        }
        if (type == "block") {
            noStroke();
            strokeWeight(0);
            rect(i * blockwidth, j * blockheight, blockwidth, blockheight);
        } else if (type == "object") {

        } else if (type == "fluid") {
        } else {
            fill(100, 100, 100);
            rect(i * blockwidth, j * blockheight, blockwidth, blockheight);
            line(i * blockwidth, j * blockheight, i * blockwidth + blockwidth, j * blockheight + blockheight)
        }
        strokeWeight(0.3);
        stroke(0);
    }
}
let inventoryItems = [];
class Inventory {
    constructor(item, edible) {
        this.item = item;
        this.edible = edible;
        AddToInventory(this.item, this. edible);
    }
    static AddToInventory(item, edible) {
        inventoryItems.push({item, edible});
    }
    static RemoveFromInvertory(id) {
        inventoryItems.splice(id - 1, 1);
    }
}
async function sleep(time, startTime, direction) {
    //time to move 1 element
    if (startTime) {
        let endTime = performance.now();
        if(direction){
            updateMapView(direction);
        }
        await setTimeout(() => {
            running = false;
        }, (time - (endTime - startTime)))
    } else {
        await setTimeout(() => {
        }, time)
    }
}