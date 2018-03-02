const { browseBySteps } = require('../common/algo1')

const main = data => {
  const lines = data.split('\n')

  // R – number of rows of the grid ( 1 ≤ R ≤ 1 0000)
  // C – number of columns of the grid ( 1 ≤ C ≤ 1 0000)
  // F – number of vehicles in the fleet ( 1 ≤ F ≤ 1 000)
  // N – number of rides ( 1 ≤ N ≤ 1 0000)
  // B – per-ride bonus for starting the ride on time ( 1 ≤ B ≤ 1 0000)
  // T – number of steps in the simulation ( 1 ≤ T ≤ 1 0 9 )
  const [R, C, F, N, B, T] = lines[0].split(' ')

  const rides = lines
    .slice(1, lines.length - 1)
    .map((line, id) => {
      line = line.split(' ')
      return {
        sx: Number(line[0]),
        sy: Number(line[1]),
        fx: Number(line[2]),
        fy: Number(line[3]),
        st: Number(line[4]),
        ft: Number(line[5]),
        isDone: false,
        id
      }
    })
    .sort((a, b) => a.st - b.st)

  const cars = new Array(Number(F)).fill(0).map(v => ({
    rides: [],
    curx: 0,
    cury: 0,
    t: 0
  }))

  const obj = {
    rides,
    cars,
    R: Number(R),
    C: Number(C),
    F: Number(F),
    N: Number(N),
    B: Number(B),
    T: Number(T)
  }

  //return algoRidesFirst(obj)
  return browseBySteps(obj)
    .map(val => [val.rides.length, ...val.rides].join(' '))
    .join('\n')
}

module.exports = { main }
