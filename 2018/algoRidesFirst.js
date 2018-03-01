module.exports = (infos) => {
    var cars = [];
    for (const ride of infos.rides) {
        let bestNote = 0;
        for (const car of infos.cars) {
            let note = calcHeuristic(car);

        }
    }

    return infos.cars;
}
