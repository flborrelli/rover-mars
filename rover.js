// Rover Object 
let roverMars = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

// Rover 2 Object
let roverMars2 = {
    direction: "N",
    x: 1,
    y: 1,
    travelLog: []
};

let roverCord = [`x: ${roverMars.x}`, ` y: ${roverMars.y}`];
let roverCord2 = [`x: ${roverMars2.x}`, ` y: ${roverMars2.y}`];


// Console log message if any rover indeed walk forward
function informGoForward(rover){
    console.log("Rover is moving one step forward.");
    roverCord = ([`x: ${rover.x}`, ` y: ${rover.y}`]); // Rover's coordinates variable
    if(rover === roverMars){
        console.log(`The Rover coordinates are now ${roverCord}`);
    } else{
        console.log(`The Rover2 coordinates are now ${roverCord2}`);
    }
}

// Console log message if any rover indeed walk backward
function informGoBackward(rover){
    console.log("Rover is moving one step backward.");
    roverCord = ([`x: ${rover.x}`, ` y: ${rover.y}`]); // Rover's coordinates variable
    if(rover === roverMars){
        console.log(`The Rover coordinates are now ${roverCord}`);
    } else{
        console.log(`The Rover2 coordinates are now ${roverCord2}`);
    }
}

//Add the new coordinate of rover1 to the travel log property array
function addTravelLog(rover){
    if(rover === roverMars){
        rover.travelLog.push(roverCord);
        console.log(`Rover 1 coordinates so far:`); //Add new coordinate to the travelLog array.    
    } else{
        rover.travelLog.push(roverCord2);
        console.log(`Rover 2 coordinates so far:`); //Add new coordinate to the travelLog array in roverMars2.
    }
    console.log(rover.travelLog);
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
                informGoForward(rover);
            }
            break;
        case "S":
            if(rover.y === 9){
                console.log("Rover can't go forward to South in this position.");
            }else{
                rover.y++;
                informGoForward(rover);
            }
            break;
        case "W":
            if(rover.x === 0){
                console.log("Rover can't go forward to West in this position.");
            }else{
                rover.x--;
                informGoForward(rover);
            }
            break;
        case "E":
            if(rover.x === 9){
                console.log("Rover can't walk forward to East in this position.");
            }else{
                rover.x++;
                informGoForward(rover);
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
                informGoBackward(rover);
            }
            break;
        case "S":
            if(rover.y === 0){
                console.log("Rover can't go backward to North in this position.");
            }else{
                rover.y--;
                informGoBackward(rover);
            }
            break;
        case "W":
            if(rover.x === 9){
                console.log("Rover can't go backward to East in this position.");
            }else{
                rover.x++;
                informGoBackward(rover);
            }
            break;
        case "E":
            if(rover.x === 0){
                console.log("Rover can't go forward to West in this position.");
            }else{
                rover.x--;
                informGoBackward(rover);
            }
            break;
    }
    }

  //Commands
  function commandRover(rover, commands){
    for(var i = 0; i < commands.length; i++){ //Loop through commands
        switch(commands[i]){
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "f":
                moveForward(rover);
                addTravelLog(rover);
                break;
            case "b": 
                moveBackward(rover);
                addTravelLog(rover);
                break;
            default:
                console.log(`You enter a invalid character, such as "${commands[i]}". Please, check your commands and please insert only (f)orward, (b)ackward, (l)eft or (r)ight inputs.`)
                break;
        }
    }
  }

//Calls
commandRover(roverMars2, "z");

commandRover(roverMars, "rfffffffffrflbbbb");

