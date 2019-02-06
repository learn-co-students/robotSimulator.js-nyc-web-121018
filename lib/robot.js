class Robot {
  constructor(coordinates=[0,0], bearing="north"){
    this.coordinates = coordinates
    this.bearing=bearing
  }

 setCoordinates(x,y){
   this.coordinates =[x,y]
 }

setBearing(direction){
  if(direction==="north"||direction==="south"||direction==="east"||direction==="west"){
  this.bearing=direction
  }else{
    throw "Invalid Robot Bearing"
  }
}

place(input){
  this.coordinates[0] = input.x
  this.coordinates[1] = input.y
  this.bearing=input.direction
}

turnRight(){
  switch(this.bearing){
    case "north":
    return this.setBearing("east")
    break;
    case "east":
    return this.setBearing("south")
    break;
    case "south":
    return this.setBearing("west")
    break;
    case "west":
    return this.setBearing("north")
    break;
  }
}

turnLeft(){
  switch(this.bearing){
    case "north":
    return this.setBearing("west")
    break;
    case "east":
    return this.setBearing("north")
    break;
    case "south":
    return this.setBearing("east")
    break;
    case "west":
    return this.setBearing("south")
    break;
  }
}

advance(){
  switch(this.bearing){
    case "north":
    return this.coordinates[1]++
    break;
    case "east":
    return this.coordinates[0]++
    break;
    case "south":
    return this.coordinates[1]--
    break;
    case "west":
    return this.coordinates[0]--
    break;
  }
}

translateInstructions(string){
  let instructions = string.split("")
  for(let i=0; i<instructions.length; i++){
    if(instructions[i] === "A"){
      this.advance()}
    if(instructions[i] === "R"){
      this.turnRight()}
    if(instructions[i] === "L"){
      this.turnLeft()}
    }
  }

}//end of class
