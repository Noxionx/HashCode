const util = require('../common/util')

module.exports = infos => {
  for (const ride of infos.rides) {
    let maxStep = Math.min(ride.ft, infos.t)
    let bestChoice = {}
    for (const car of infos.cars) {
      let note = calcHeuristic(car, ride)
      if (maxStep >= note && (!bestChoice.car || bestChoice.note > note)) {
        bestChoice.car = car
        bestChoice.note = note
      }
    }

    if (bestChoice.car) {
      validBestChoice(ride, bestChoice.car, bestChoice.note)
    }
  }
  console.log(infos.cars)
  return infos.cars
}

function calcHeuristic(car, ride) {
  let note = util.calcul_distance(car.curx, car.cury, ride.sx, ride.sy)
  note += util.calcul_distance(ride.sx, ride.sy, ride.fx, ride.fy)

  if (note < ride.st) {
    note = ride.st
  }

  return note
}

function validBestChoice(ride, car, note) {
  car.ride.push(ride.id)
  car.t += note
  car.curx = ride.fx
  car.cury = ride.fy
}
