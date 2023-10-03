function drawRandomMap() {
    for (i = 0; i < blockwidth; i++) {
        for (j = 0; j < blockheight; j++) {
            map.push(Tile((map.length/blockwidth), (map.length/blockheight)));
        }
    }
    drawPlayer("down");
}
function drawPlayer(dir) {
    let centerpos = [{
        x: Math.round(blockwidth * blockwidth / 2),
        y: Math.round(blockheight * blockheight / 2)
    }];
    stroke(0);
    strokeWeight(0.8);
    fill(197, 140, 133);
    if (dir == "up") {
        rect(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y + blockheight - blockheight / 2, blockheight, blockheight / 2, 200);
        rect(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y, blockheight, blockheight, 200);
        fill(200, 0, 0);
        triangle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2 + blockheight, centerpos[0].y + blockheight / 2, centerpos[0].x - blockwidth / 2, centerpos[0].y + blockheight, centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2 + blockheight, centerpos[0].y + blockheight);
    } else if (dir == "right") {
        rect(centerpos[0].x - blockwidth / 2 - blockheight / 4, centerpos[0].y, blockheight / 2, blockheight + 3, 200);
        rect(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y, blockheight, blockheight, 200);
        fill(200, 0, 0);
        triangle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y + blockheight / 2, centerpos[0].x - blockwidth / 2, centerpos[0].y + blockheight, centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y + blockheight);
    } else if (dir == "left") {
        rect(centerpos[0].x - blockwidth / 2 - blockheight / 4, centerpos[0].y, blockheight / 2, blockheight + 3, 200);
        rect(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y, blockheight, blockheight, 200);
        fill(200, 0, 0);
        triangle(centerpos[0].x - blockwidth / 2 + blockheight / 2, centerpos[0].y + blockheight / 2, centerpos[0].x - blockwidth / 2, centerpos[0].y, centerpos[0].x - blockwidth / 2 + blockheight / 2, centerpos[0].y);
    } else if (dir == "down") {
        rect(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y, blockheight, blockheight, 200);
        fill(0, 0, 0);
        noStroke();
        circle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2 + blockheight - blockheight / 3, centerpos[0].y + blockheight / 1.5, blockwidth / 6);
        circle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2 + blockheight / 3, centerpos[0].y + blockheight / 1.5, blockwidth / 6);
        fill(220, 220, 220);
        circle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2 + blockheight - blockheight / 3, centerpos[0].y + blockheight / 1.5, blockwidth / 8);
        circle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2 + blockheight / 3, centerpos[0].y + blockheight / 1.5, blockwidth / 8);
        fill(200, 0, 0)
        stroke(0);
        triangle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y + blockheight / 2, centerpos[0].x - blockwidth / 2, centerpos[0].y, centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y);
        noStroke();
        circle(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2 + blockheight / 2, centerpos[0].y + blockheight - blockwidth / 16, blockwidth / 8);
        //rect(centerpos[0].x - blockwidth / 2 - blockheight + blockheight / 2, centerpos[0].y, blockheight, blockheight / 2, 200);
    }
    strokeWeight(0.3);
}
function drawstorediv(type) {
    fill(200);
    rect(blockwidth * 4, blockheight * 5, w - blockwidth * 6, h - blockheight * 10, blockwidth);
    buttons[0] = createButton(`sell items`);
    buttons[0].position(blockwidth * 5, blockheight * 6, w - blockwidth * 6, h - blockheight * 10);
    buttons[0].mousePressed(function () {
        drawInventory();
    });
    buttons[1] = createButton(`buy items`);
    buttons[1].position(blockwidth * 15, blockheight * 6, w - blockwidth * 6, h - blockheight * 10);
}
function drawInventory() {
    fill(0);
    let inventoryheight = 100;
    rect(0, h - inventoryheight, w, h, blockwidth);
    return;
    if (inventoryItems.length == 0) {
        text(`No items bought yet, go to a store to buy items`);
    } else {
        for (j = 0; inventoryItems.length > j; j++) {
            if (j > 2) {
                // 3
                break;
            }
            let sellprice = inventoryItems[j].sellprice;
            text(`Item: ${inventoryItems[j].item}`, w / 2, blockheight * 6 + j * 5 * blockheight);
            //text(`sell for: ${inventoryItems[i].price}`, w / 2, blockheight * 8 + i * 5 * blockheight);
            buttons[i + j + 2] = createButton(`sell ${inventoryItems[j].item} for ${sellprice}`, inventoryItems[j].name);
            buttons[i + j + 2].position(w / 2 + blockheight * 6, blockheight * 6 + j * 5 * blockheight, 0);
            buttons[i + j + 2].mousePressed(sellitem.bind(" ", j, (inventoryItems[j].sellprice * Math.floor(Math.random() * 2) + 1)));
        }
    }
}



function drawalert(value, type) {
    textSize(blockheight);
    strokeWeight(1)
    let infotitle = type;
    if (type == "warning") {
        fill("#fbbc04");
    } else if (type == "success") {
        infotitle = "yay";
        fill("#4bf478");
    } else {
        infotitle = "info";
        fill("#c8c8c8")
    }
    stroke(0);
    rect(blockwidth * 6, blockheight * 1.5, w - blockwidth * 12, blockheight * 1.5, blockheight / 2);
    fill(255);
    text(`${infotitle}: ${value}`, blockwidth * 7, blockheight + blockheight * 1.5);
}