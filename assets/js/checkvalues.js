function checkWhatBlockUserIsOn() {
    // somehow its "- blockheight + 2", should check on other devices
    let halfofarray = Math.floor(map.length / 2) - blockheight / 2;
    if (map[halfofarray].object) {
        // center block do something
    }
}
function checkuserinput() {
    /*
    left = 37
    up = 38
    right = 39
    down = 40
    */
    let starttime = performance.now();
    if (running == true) {
        return;
    } else {
        running = true;
    }
    //time in ms for next move possible
    let timeout = 150;
    if (keyIsDown(69)) {
        drawInventory();
        running = false;
    } else if (keyIsDown(37)) {
        move(starttime, timeout, "left");
    } else if (keyIsDown(39)) {
        move(starttime, timeout, "right");
    } else if (keyIsDown(38)) {
        move(starttime, timeout, "up");
    } else if (keyIsDown(40)) {
        move(starttime, timeout, "down");
    } else if (key == "Escape") {
        move(starttime, null, null);
        updateMapView("");
        running = false;
    } else {
        running = false;
        text(keyCode, 100, 100)
    }
    if(running == false){
        updateMapView(lastDirection);
    }
}
async function move(startTime, timeout, direction) {
    lastDirection = direction;
    if (direction == "left") {
        position[0] = position[0] - 1;
        for (k = 0; k < blockheight; k++) {
            map.unshift(Tile(position[0], position[1] + blockheight - k));
            map.pop()
        }
    } else if (direction == "up") {
        position[1] = position[1] - 1;
        //makes the illusion of moving up, all it does is removing the last tile and add a new tile at the first tile
        map.splice(blockwidth * blockwidth + blockwidth, 1);
        map.splice(0, 0, Tile(position[0] , position[1]));
        map.pop()
    } else if (direction == "down") {
        position[1] = position[1] + 1;
        //makes the illusion of moving down, all it does is removing the first tile and add a new tile at the end
        map.splice(0, 1);
        map.splice(blockwidth * blockwidth + blockwidth, 0, Tile(position[0] + blockwidth, position[1] + blockheight));
    } else if (direction == "right") {
        position[0] = position[0] + 1;
        map.splice(0, blockheight);
        for (k = 0; k < blockheight; k++) {
            map.push(Tile(position[0], position[1] + blockheight - k));
        }
    }
    sleep(timeout, startTime, direction);
}