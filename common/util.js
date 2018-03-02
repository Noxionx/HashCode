const calcul_distance = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2)

module.exports.calcul_distance = calcul_distance
/**
 * a position abscisse vehicule
 * b position ord vehicule
 * x destination abs veh
 * y destination ord veh
 * earlier
 * finish
 */
const howLong = (a, b, x, y, currentStep, earlier, finish) => {
  const distRestante = calcul_distance(a, b, x, y) + currentStep

  if (distRestante === earlier) {
    return Number.NEGATIVE_INFINITY
  } //arriver pile poile retour 0 (BONUS)
  if (distRestante < earlier) {
    return Math.pow(earlier - distRestante, 2)
  } // arriver tôt (negatif)
  if (distRestante > finish) {
    return Number.POSITIVE_INFINITY
  } //infini ne va pas là
  if (distRestante <= finish && distRestante > earlier) {
    return distRestante
  } //distance pour y aller (positif)
  return 0
}

module.exports.howLong = howLong
