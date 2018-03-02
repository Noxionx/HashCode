const util = require('../common/util')

module.exports = infos => {
    
    for (const ride of infos.rides) {
    let maxStep = Math.min(ride.ft, infos.T);
    
    var bestChoice = {note : 0}
    for (const car of infos.cars) {
      let note = calcHeuristic(car, ride)
      
      if ((!bestChoice.car || bestChoice.note > note)) {
        bestChoice.car = car
        bestChoice.note = note
      }
    }

    if (bestChoice.car) {
      validBestChoice(ride, bestChoice.car, bestChoice.note)
    }
  }
  
  return infos.cars;
}

function calcHeuristic(car, ride) {
  let note = util.calcul_distance(car.curx, car.cury, ride.sx, ride.sy);

  note += util.calcul_distance(ride.sx, ride.sy, ride.fx, ride.fy);
    note += car.t;
  return Math.max(note, ride.ft);
}

function validBestChoice(ride, car, note) {
  car.rides.push(ride.id)
  car.t += note
  car.curx = ride.fx
  car.cury = ride.fy
}
