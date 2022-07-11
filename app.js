let angle={x:11,y:-20,z:-5}

function setup() {
    createCanvas(window.innerWidth-50 ,window.innerHeight-50  , WEBGL)
    Cube(450, createVector(0,0,0))
}

function draw() {
    clear(0, 0, 0, 1)
    background(20)
    stroke(127)
    rotateX(angle.x)
    rotateY(angle.y)
    rotateZ(angle.z)
    cubes.forEach(cube => cube.draw())
    angle.x += 0.003
    angle.y+=0.002
    angle.z+=0.001
}

function split() {
    const cubes_ = [...cubes]
    cubes_.forEach(cube => cube.split())

}

function mouseClicked() {
    split()
}

function touchStarted() {
    split()
}
