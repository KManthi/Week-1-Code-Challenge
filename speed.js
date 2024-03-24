// This function detects whether the speed of a vehicle is permissible or not.

function speedDetector(speed) {

// This sets the speed limit at 70 and calculates the demerit points for every 5km/s above the limit.
const speedLimit = 70; 
const kmPerDemeritPoint = 5;
const demeritPoints = Math.round((speed - speedLimit)/ kmPerDemeritPoint);

// This prints ok if the speed is below the limit.
    if (speed <= speedLimit) {
        return 'Ok.';
        //This checks whether the demerit points exceed the 12 limit, if not it prints the demerit points for every 5km/s above the limit.
    } else {
        if (demeritPoints > 12) {
            return 'License Suspended.'
        } else {
            return 'Points: ' + demeritPoints;
        }
    }
}

