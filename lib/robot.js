class Robot {

  constructor(coordinates = [0, 0], bearing = 'north'){
    this.coordinates = coordinates
    this.bearing = bearing

  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(direction){
    if (direction === 'north' ||
    direction === 'south' ||
    direction === 'west' ||
    direction === 'east'){
      this.bearing = direction
    }
    else {
      throw 'Invalid Robot Bearing'
    }
  }

  place({x, y, direction}){
    this.setCoordinates(x, y)
    this.setBearing(direction)
  }

  turnRight(){
    switch(this.bearing){
    case "north":
      this.bearing = "east"
      break;
    case "east":
        this.bearing = "south"
        break;
    case "south":
      this.bearing = "west"
      break;
    case "west":
      this.bearing = "north"
      break;
    }
  }

  turnLeft(){
    switch(this.bearing){
    case "north":
      this.bearing = "west"
      break;
    case "east":
        this.bearing = "north"
        break;
    case "south":
      this.bearing = "east"
      break;
    case "west":
      this.bearing = "south"
      break;
    }
  }

  advance(){
    switch(this.bearing){
    case "north":
      this.coordinates = [this.coordinates[0], this.coordinates[1] + 1]
      break;
    case "east":
        this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]]
        break;
    case "south":
      this.coordinates = [this.coordinates[0], this.coordinates[1] - 1]
      break;
    case "west":
      this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]]
      break;
    }
  }

  translateInstructions(instruction){
    switch(instruction){
    case "L":
      this.turnLeft()
      break;
    case "R":
        this.turnRight()
        break;
    case "A":
      this.advance()
      break;
    default:
      let complex = instruction.split("")
      complex.forEach( i => {
        console.log('turning', i);
        return this.translateInstructions(i)
      })

    }
  }

}
