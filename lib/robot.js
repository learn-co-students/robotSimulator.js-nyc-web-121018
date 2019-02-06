class Robot {

	 constructor() {
    this.thing = "I am a Robot"
    this.coordinates = [0, 0]
    this.bearing = "north"
    } //end of constructor

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"]
    const err = new Error("Invalid Robot Bearing")
      if (directions.includes(direction)) {
        this.bearing = direction
      } else {
        throw err
      }
  }

  place(location) {
    this.setCoordinates(location.x, location.y)
    this.setBearing(location.direction)
  }

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east"
    } else if (this.bearing === "east") {
      this.bearing = "south"
    } else if (this.bearing === "south") {
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west"
    } else if (this.bearing === "east") {
      this.bearing = "north"
    } else if (this.bearing === "south") {
      this.bearing = "east"
    } else if (this.bearing === "west") {
      this.bearing = "south"
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1] += 1
    } else if (this.bearing === "east") {
      this.coordinates[0] += 1
    } else if (this.bearing === "south") {
      this.coordinates[1] -= 1
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(instructions){
    let commands = instructions.split("")
    commands.forEach( command => {
      if (command === "L"){
        this.turnLeft()
      }
      else if (command === "R"){
        this.turnRight()
      }
      else if (command === "A"){
        this.advance()
      }
    })
  }


} //end of Robot class
