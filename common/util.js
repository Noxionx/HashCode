module.exports.calcul_distance = ({x1,y1,x2,y2}) => Math.abs(x1-x2) + Math.abs(y1-y2);


/**
 * a position abscisse vehicule
 * b position ord vehicule
 * x destination abs veh
 * y destination ord veh
 * earlier
 * finish
 */
module.exports.howLong = ({a,b,x,y,currentStep,earlier, finish}) => {
    
    dist =  calcul_distance(a,b,x,y);
    distRestante = dist+currentStep
    if(distRestante === earlier){return 0} //arriver pile poile retour 0 (BONUS)
    if(distRestante < earlier) {return  Math.pow(earlier-distRestante, 2);} // arriver tôt (negatif)
    if(distRestante > finish) {return Number.POSITIVE_INFINITY} //infini ne va pas là
    if(distRestante <= finish && distRestante > earlier ) {return distRestante} //distance pour y aller (positif)

}


