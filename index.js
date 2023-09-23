// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    const feet = blocks * 264;
    return feet;
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
