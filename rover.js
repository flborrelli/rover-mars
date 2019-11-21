// Rover Object 
let roverMars = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

let roverCord = [`x: ${roverMars.x}`, ` y: ${roverMars.y}`];

// Console log message if the rover indeed walk forward
function informGoForward(){
    console.log("Rover is moving one step forward.");
    roverCord = ([`x: ${roverMars.x}`, ` y: ${roverMars.y}`]); // Rover's coordinates variable
    console.log(`The Rover coordinates are now ${roverCord}`);
}

// Console log message if the rover indeed walk backward
function informGoBackward(){
    console.log("Rover is moving one step backward.");
    roverCord = ([`x: ${roverMars.x}`, ` y: ${roverMars.y}`]); // Rover's coordinates variable
    console.log(`The Rover coordinates are now ${roverCord}`);
}

//Add the new coordinate to the travel log property array
function addTravelLog(){
    roverMars.travelLog.push(roverCord); //Add new coordinate to the travelLog array.
    console.log("Rover coordinates so far:");
    console.log(roverMars.travelLog);
}

// Turn left
function turnLeft(rover){
    console.log("turnLeft was called!");
    console.log(`The Rover is facing ${rover.direction} and turns left.`); //Rover's current position before turn left
    switch(rover.direction){
        case "N":
            rover.direction = "W";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
    console.log(`Rover is now facing ${rover.direction}!`) // New direction facing after turn left
  }
  

  //Turn right
  function turnRight(rover){
    console.log("turnRight was called!");
    console.log(`The Rover is facing ${rover.direction} and turns right.`); //Rover's current position befor turn right
    switch(rover.direction){
        case "N":
            rover.direction = "E";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
        case "E":
            rover.direction = "S";
            break;
    }
    console.log(`Rover is now facing ${rover.direction}!`) // New direction facing after turn right
  }
  
  //Move forward
  function moveForward(rover){
    console.log("moveForward was called");
    switch(rover.direction){
        case "N":
            if(rover.y === 0){
                console.log("Rover can't go forward to North in this position.")
            }else{
                rover.y--
                goForward();
            }
            break;
        case "S":
            if(rover.y === 9){
                console.log("Rover can't go forward to South in this position.");
            }else{
                rover.y++;
                informGoForward();
            }
            break;
        case "W":
            if(rover.x === 0){
                console.log("Rover can't go forward to West in this position.");
            }else{
                rover.x--;
                informGoForward();
            }
            break;
        case "E":
            if(rover.x === 9){
                console.log("Rover can't walk forward to East in this position.");
            }else{
                rover.x++;
                informGoForward();
            }
            break;
    }
    }

  //Move bacward
  function moveBackward(rover){
    console.log("moveBackward was called");
    switch(rover.direction){
        case "N":
            if(rover.y === 9){
                console.log("Rover can't go backward to South in this position.")
            }else{
                rover.y++
                informGoBackward();
            }
            break;
        case "S":
            if(rover.y === 0){
                console.log("Rover can't go backward to North in this position.");
            }else{
                rover.y--;
                informGoBackward();
            }
            break;
        case "W":
            if(rover.x === 9){
                console.log("Rover can't go backward to East in this position.");
            }else{
                rover.x++;
                informGoBackward();
            }
            break;
        case "E":
            if(rover.x === 0){
                console.log("Rover can't go forward to West in this position.");
            }else{
                rover.x--;
                informGoBackward();
            }
            break;
    }
    }

  //Commands
  function commandRover(commands){
    for(var i = 0; i < commands.length; i++){ //Loop through commands
        switch(commands[i]){
            case "l":
                turnLeft(roverMars);
                break;
            case "r":
                turnRight(roverMars);
                break;
            case "f":
                moveForward(roverMars);
                addTravelLog();
                break;
            case "b": 
                moveBackward(roverMars);
                addTravelLog();
                break;
            default:
                console.log(`You enter a invalid character, such as "${commands[i]}". Please, check your commands and please insert only (f)orward, (b)ackward, (l)eft or (r)ight inputs.`)
                break;
        }
    }
  }


//Calls
commandRover("zsss");
