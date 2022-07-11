const cubes = []

const Cube = (size, pos) => {
    const cube = {}

    cube.size = size
    cube.pos = pos
    cube.color = `hsl(${Math.floor(Math.random() * 10)+60}, 100%, 80%)`

    cube.draw = () => {
        translate(pos.x, pos.y,  pos.z)

        fill(cube.color)
        box(size)
        translate(-pos.x, -pos.y,  -pos.z)
    }

    cube.split = () => {
        const newSize = size/3
        const {x, y, z} = cube.pos
        console.log(cube);
        cubes.splice(cubes.indexOf(cube), 1)
        Cube(newSize, createVector(x-newSize, y-newSize, z-newSize))
        Cube(newSize, createVector(x-newSize, y, z-newSize))
        Cube(newSize, createVector(x-newSize, y+newSize, z-newSize))
        Cube(newSize, createVector(x+newSize, y-newSize, z-newSize))
        Cube(newSize, createVector(x+newSize, y, z-newSize))
        Cube(newSize, createVector(x+newSize, y+newSize, z-newSize))
 
        Cube(newSize, createVector(x-newSize, y-newSize, z+newSize))
        Cube(newSize, createVector(x-newSize, y, z+newSize))
        Cube(newSize, createVector(x-newSize, y+newSize, z+newSize))
        Cube(newSize, createVector(x+newSize, y-newSize, z+newSize))
        Cube(newSize, createVector(x+newSize, y, z+newSize))
        Cube(newSize, createVector(x+newSize, y+newSize, z+newSize))
 
        Cube(newSize, createVector(x-newSize, y+newSize, z))
        Cube(newSize, createVector(x+newSize, y+newSize, z))

        Cube(newSize, createVector(x-newSize, y-newSize, z))
        Cube(newSize, createVector(x+newSize, y-newSize, z))

        Cube(newSize, createVector(x, y+newSize, z+newSize))
        Cube(newSize, createVector(x, y+newSize, z-newSize))

        Cube(newSize, createVector(x, y-newSize, z+newSize))
        Cube(newSize, createVector(x, y-newSize, z-newSize))


 
    }
    cubes.push(cube)
    return cube
}