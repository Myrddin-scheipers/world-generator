timeout = 150;
gameControl.on('connect', async function(gp) {
  for (let x = 0; x < Math.min(17, gp.buttons); x++) {
    gp.on('button' + x, async function() {
        timeout = 50;
        // default run speed
        if(x == 1){
            if(running == true){
                return;
            }
            running = true;
            let starttime = performance.now();
            await move(starttime, timeout, "down");
            await updateMapView("down");
        }
    }).after('button0',  () => {
        timeout = 150;
    });
  }
  for (let x = 0; x < Math.min(2, gp.axes); x++) {
    const directions = ['up', 'down', 'right', 'left'];
    for (let d = 0; d < directions.length; d++) {
      gp.on(directions[d] + x, async function() {
        if(running == true){
            return;
        }
        running = true;
        starttime = performance.now();
        await move(starttime, timeout, directions[d]);
      });
    }
  }
})