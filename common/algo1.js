var util = require('./util')

module.exports.browseBySteps = ({ cars, rides, T }) => {
  let step = 0

  while (step < T) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].t <= step) {
        //rides possibles
        const availableRides = rides
          .filter(ride => !ride.isDone)
          .map(ride => {
            return {
              ...ride,
              score: util.howLong(
                cars[i].curx,
                cars[i].cury,
                ride.sx,
                ride.sy,
                step,
                ride.st,
                ride.ft
              )
            }
          })
          .sort((a, b) => a.score - b.score)

        const bestRide = availableRides[0]

        if (availableRides.length > 0) {
          cars[i].t =
            util.calcul_distance(bestRide.sx, bestRide.sy, bestRide.fx, bestRide.fy) +
            util.calcul_distance(cars[i].curx, cars[i].cury, bestRide.fx, bestRide.fy) +
            step
          cars[i].curx = bestRide.fx
          cars[i].cury = bestRide.fy
          cars[i].rides.push(bestRide.id)
          rides[
            rides.reduce((acc, ride, idx) => {
              return bestRide.id === ride.id ? idx : acc
            }, 0)
          ].isDone = true
        }
      }
    }
    step++
  }
  return cars
}
