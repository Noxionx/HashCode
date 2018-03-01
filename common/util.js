module.exports.calcul_distance = ({x1,y1,x2,y2}) => Math.abs(x1-x2) + Math.abs(y1-y2);


/**
 * a position abscisse vehicule
 * b position ord vehicule
 * x destination abs veh
 * y destination ord veh
 * earlier
 * finish
 */
module.exports.howLong = ({a,b,x,y,earlier, finish}) => {
    
    dist =  calcul_distance(a,b,x,y) ;
    if(dist === earlier){return 0} //arriver pile poile retour 0 (BONUS)
    if(dist < earlier) {return  Math.pow(earlier-dist, 2);} // arriver tôt (negatif)
    if(dist > finish) {return Number.POSITIVE_INFINITY} //infini ne va pas là
    if(dist <= finish && dist > earlier ) {return dist} //distance pour y aller (positif)

}


