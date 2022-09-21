function car() {
    let stopped= {
        moving: false,
        engineOn: true,
    }
    return stopped
}
let atLight= car();

atLight.moving= true;
console.log(atLight);

/*
functionBrake(){
return stop
}
*/


