

var util = require('util');


module.exports.browseBySteps = (cars, rides) => {

    //rides possibles
    availableRides = rides.filter(ride => ride.isDone === false )
    
    // Pour chaque voiture
    cars.forEach(car => {    
        //calcul score
        availableRides.map ((ride,index) => ride.score = util.howLong(car.curx, car.cury, car.t, ride.st, ride.ft));

        //tri
        availableRides.sort(function (a, b) {return a.score - b.score});
        
        
        if (availableRides.length > 0){
            car.rides.push(ride[0].id);
            availableRides.splice(0,1);
        }
        
                  
                
        
            

        });
        
    });


}