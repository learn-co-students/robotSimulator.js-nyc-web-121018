class Robot {
	//your solution here
  constructor(coordinates = [0, 0], bearing = "north"){
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(direction){
    if(direction === "north"){
      this.bearing = direction
    }
    else if (direction === "south"){
      this.bearing = direction
    }
    else if (direction === "east"){
      this.bearing = direction
    }
    else if (direction === "west"){
      this.bearing = direction
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(object){
    this.coordinate = this.setCoordinates(object['x'], object['y'])
    this.direction = this.setBearing(object['direction'])
  }

  turnRight(){
    let array = ["north", "east", "south", "west"]
    let facing = array.indexOf(this.bearing)
    if(facing == 3){
      facing = 0
      this.bearing = array[facing]
    }
    else {
      this.bearing = array[facing + 1]
    }
  }

  turnLeft(){
    let array = ["north", "east", "south", "west"]
    let facing = array.indexOf(this.bearing)
    if(facing == 0){
      facing = 3
      this.bearing = array[facing]
    }
    else {
      this.bearing = array[facing - 1]
    }
  }

  advance(){
    if(this.bearing === "north"){
      this.coordinates[1] += 1
    }
    else if (this.bearing === "south"){
      this.coordinates[1] -= 1
    }
    else if (this.bearing === "east"){
      this.coordinates[0] += 1
    }
    else if (this.bearing === "west"){
      this.coordinates[0] -= 1
    }
  }
// "RRAL"
  translateInstructions(string){
    for(const c of string){
      if (c === "L"){
        this.turnLeft()
        // console.log("left");
      }
      else if (c === "R"){
        this.turnRight()
        // console.log("right");
      }
      else if (c === "A"){
        this.advance()
        // console.log("advance");
      }
    }
  }

}
