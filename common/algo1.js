var util = require('./util')

module.exports.browseBySteps = ({ cars, rides, T }) => {

  let step = 0
console.log(T);
  while (step <= T) {
    // Pour chaque voiture
    cars.filter(car => car.t === step).forEach(car => {
      //rides possibles
      var availableRides = rides.filter(ride => !ride.isDone)
      availableRides.forEach(ride => {
        ride.score = util.howLong(car.curx, car.cury, car.t, ride.st, ride.ft)
      })
      availableRides.sort((a, b) => a.score - b.score)

      if (availableRides.length > 0) {
        car.t = util.calcul_distance(availableRides[0].sx, availableRides[0].sy, availableRides[0].fx, availableRides[0].fy)+step;
        car.curx = availableRides[0].fx
        car.cury = availableRides[0].fy
        car.rides.push(availableRides[0].id)
        availableRides[0].isDone = true;
        //console.log(car.curx);
      }
    })
    //console.log(step)

    step++
  }
  //console.log(cars)

  return cars
}
