//function to calculate and detect speed
function speedDetector(speed){
    //variables that will be used to calculate and detect speed
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPoints = (speed - speedLimit) / kmPerDemeritPoint;
    const maxDemeritPoints = 12;
//Speed detector conditional statements for speed that is less than or equal to the speed limit
    if (speed < speedLimit){
        return 'Ok';
    } 
    // conditional statement for speed beyond maximum demerit points
    else if (demeritPoints > maxDemeritPoints) {
        return 'License suspended';
    } 
    // conditional statement for calculating demerit points
    else (speed > speedLimit); {
        return "Points: " + demeritPoints;
    }
}
//input speed to calculate demerit points
console.log(speedDetector(67))