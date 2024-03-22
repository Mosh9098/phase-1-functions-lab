function distanceFromHqInBlocks() {
    return 1;
  } 

function distanceFromHqInFeet() {
    const distanceInBlocks = distanceFromHqInBlocks();
      const distanceInFeet = distanceInBlocks * 264;
      return distanceInFeet;
  }
  
  console.log(distanceFromHqInFeet); 

function distanceTravelledInFeet(start, destination) {
    const distanceInFeet = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceTravelledInFeet = distanceInBlocks * distanceInFeet;

    return distanceTravelledInFeet;
}
console.log("Distance travelled in feet:", distance);


function calculatesFarePrice(start, destination) {
    const distanceInFeet = 264;
    const distanceFeet = Math.abs(destination - start) * distanceInFeet;

    if (distanceFeet <= 400) {
        return 0; 
    } else if (distanceFeet > 400 && distanceFeet <= 2000) {
        return (distanceFeet - 400) * 0.02; 
    } else if (distanceFeet > 2000 && distanceFeet < 2500) {
        return 25; 
    } else if (distanceFeet >= 2500) {
        return 'cannot travel that far'; 
    }
}
console.log("Fare price:", fare);
