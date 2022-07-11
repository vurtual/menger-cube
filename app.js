let angle={x:-35,y:10,z:0}

function setup() {
    createCanvas(window.innerWidth-50 ,window.innerHeight-50  , WEBGL)
    Cube(400, createVector(0,0,0))
    noStroke()
    }

function draw() {
    clear(0, 0, 0, 1)
    rotateX(-(mouseY-0.5*height)/400)
    rotateY((mouseX-0.5*width)/400)
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, 500,500, 100);
  
    // rotateX(angle.x)
    // rotateY(angle.y)
    // rotateZ(angle.z)   

    cubes.forEach(cube => cube.draw())
    // angle.x += 0.003
    // angle.y+=0.002
    // angle.z+=0.001
}

function cubeSplit() {
    const cubes_ = [...cubes]
    cubes_.forEach(cube => cube.split())

}

function mousePressed() {
    cubeSplit()
}

function touchStarted() {
    cubeSplit()
}

function touchMoved() {
    return false
}