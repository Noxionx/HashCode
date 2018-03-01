var util = require('./util')

module.exports.browseBySteps = ({ cars, rides, T }) => {
  console.log(cars)
  let step = 0

  while (step <= T) {
    // Pour chaque voiture
    cars.filter(car => car.t === step).forEach(car => {
      //rides possibles
      const availableRides = rides.filter(ride => !ride.isDone)
      availableRides.forEach(ride => {
        ride.score = util.howLong(car.curx, car.cury, car.t, ride.st, ride.ft)
      })
      availableRides.sort((a, b) => a.score - b.score)

      if (availableRides.length > 0) {
        car.t = util.calcul_distance(car.curx, car.cury, rides[0].sx, rides[0].sx)
        car.curx = rides[0].fx
        car.cury = rides[0].fy
        car.rides.push(rides[0].id)
        availableRides.shift()
      }
    })

    step++
  }
  console.log(cars)

  return cars
}
