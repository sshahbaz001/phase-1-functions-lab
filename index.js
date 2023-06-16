
// STEP 1: PSEUDOCODE: INITIAL THOUGHT PROCESS
/*
distanceFromHqInBlocks = function(pickUpLocation) { // we have a function defined as distanceFromHqInBlocks 
    blocks = |42 - pickUpLocation|
    return blocks;
};
*/

// STEP 2: TRANSLATION STEPS
/*
  • Define function that takes in `location` argument.
  • Calculate distance-in-blocks as absolute value of location and 42.
  • Return distance-in-blocks from function.
  • Call function and save output/return as variable.
*/


// STEP 3: IMPLEMENTATION CODE
// Define function that takes in `location` argument.
/* function distanceFinder(location) {
    let distance;
    // Calculate distance-in-blocks as absolute value of location and `42`.
    // OPTION 1. If/Else Conditional
    if (location >= 42) {
        distance = location - 42;
    } else {
        distance = 42 - location;
    }
    // OPTION 2. Math Abs
    // let distance = Math.abs(42 - location)
    // Return distance-in-blocks from function.
    return distance
}

console.log(distanceFinder(50))







/* calculate the distance traveled in feet. Each block is 264 feet long. 
 1. we calculate the distance traveled in blocks. 
 2. multiply that distance by 264
 3. from the previous function we have the distqance in blocks. we need to at 264 from that value. */

function distanceFromHqInBlocks(location) { // defined the function as distanceFinder and the parameter will be the location 
    let blocks;                              // here we are defining distance 
    if (location >= 42) {              // I need to do an if, then statement because i havve to do different math problems depending on the value 
        blocks = location - 42;
    } else {
        blocks = 42 - location;
    }
    return blocks                       // this will give me the distance in blocks 
                                            //console.log(distanceFinder(50)) 
}

function distanceFromHqInFeet (location) {
     const blocks = distanceFromHqInBlocks(location)    
     const feet = blocks * 264
     return feet;
}

/* Now we want to find the distance we traveled in feet. This function does not have a set starting point. 
we want to find the number of blocks traveled, then multiply that value to 264 to find the feet*/

function distanceTravelledInFeet (start, destination){
    const distance = Math.abs(start - destination)
    return distance * 264
}

/* now I want to calculate the fare price, using the distance in feet. 
    - 0 - 400 ft --> free
    - 401 ft - 2000 ft --> .02 cents per foot 
    - 2001 ft - 2499 ft --> $25 
    - 2500 ft --> 'cannot travel that far' */

function calculatesFarePrice(start, destination) {
    let traveled = distanceTravelledInFeet (start, destination)
    let fare 
    if  (traveled < 400) {
        return 0;
    } 
    // else if  (400 <= traveled <= 2000) {       /// multiple the feet by .02. this tells me the total distance, but the first 400 are still free. so I am only charging for the fee that traveled after 400 feet
    else if ((traveled >= 400) && (traveled <= 2000)) {
        console.log("hi");
        return (traveled - 400) * 0.02;
        
    }
    else if ((2000 < traveled) && (traveled < 2500)) {       /// for a distance over 2000, charge a flat rate of 25
        console.log("hey");
        return 25;
    } 
    else if (traveled >= 2500) {
        return 'cannot travel that far'
    }

    // } else {
    //     (traveled > 2500)
    //     return 'cannot travel that far';
    } 
    