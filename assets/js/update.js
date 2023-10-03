function updateMapView(dir) {
    for(i = 0; buttons.length > i; i++){
        buttons[i].remove();
    }
    let k = 0;
    for (i = 0; i < blockwidth; i++) {
        for (j = 0; j < blockheight; j++) {
            if (map[k] == undefined) {
                break;
            }
            Blocks.drawblock(i, j, map[k].object, map[k])
            k++;
        }
    }
    drawPlayer(dir);
    if(dir){
        checkWhatBlockUserIsOn();
    }
}