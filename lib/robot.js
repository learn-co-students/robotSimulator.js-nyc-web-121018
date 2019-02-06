const validDirections = ["north", "east", "south", "west"]
class Robot {
	//your solution here
  constructor(coordinates, bearing){
    this.coordinates = [0,0];
    this.bearing = 'north';
  }
  setCoordinates(x,y){
    this.coordinates = [x,y];
  }
  setBearing(direction){
    if (validDirections.includes(direction)){
      this.bearing = direction
    }else{
      throw 'Invalid Robot Bearing'
    }
  }
  place(location){
    this.setCoordinates(location.x,location.y)
    this.setBearing(location.direction)
  }
  turnRight(){
    if (this.bearing === 'west') {
      this.bearing = validDirections[0]
    }else{
      this.bearing = validDirections[validDirections.indexOf(this.bearing) + 1]
    }
  }
  turnLeft(){
    if (this.bearing === 'north') {
      this.bearing = validDirections[3]
    }else{
      this.bearing = validDirections[validDirections.indexOf(this.bearing) - 1]
    }
  }
  advance(){
    if (this.bearing === 'north') {
      this.coordinates[1] = this.coordinates[1]+1
    }
    if (this.bearing === 'east') {
      this.coordinates[0] = this.coordinates[0]+1
    }
    if (this.bearing === 'south') {
      this.coordinates[1] = this.coordinates[1]-1
    }
    if (this.bearing === 'west') {
      this.coordinates[0] = this.coordinates[0]-1
    }
  }
  translateInstructions(string){
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === 'L') {
        this.turnLeft()
      }
      if (string.charAt(i) === 'R') {
        this.turnRight()
      }
      if (string.charAt(i) === 'A') {
        this.advance()
      }
    }
  }
}
