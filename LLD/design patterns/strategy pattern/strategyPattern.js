/* using composition rather than inheritance understanding inheritance is not intented for code reuse
   whenever there is scenieario where multiple subclass child is using it's own functionality rather
   than that of parent due to duplicate is happening.
*/

class Vehicle {
    drive(){
        console.log("this is normal Drive method");
    }
}

class SportsVehicle extends Vehicle{
    drive(){
        console.log("fast driving");
    }
}
class OffRoadVehicle extends Vehicle{
    drive(){
        console.log("offRoad driving");
    }
}
class SuvVehicle extends Vehicle{
    drive(){
        console.log("offRoad driving");
    }
}
class passengerVehicle extends Vehicle{
   
}
// ---------  After implementing strategy pattern; -----------
// strategy folder
class DriveStrategy { 
    drive(){
       throw new Error ('implement drive method');// act as interface
    }
}
class NormalDriverStrategy extends DriveStrategy {
    drive(){
        console.log("this is normal Drive method");
    }
}
class SportsDriverStrategy extends DriveStrategy {
    drive(){
        console.log("fast driving");
    }
}
class SuVDriverStrategy extends DriveStrategy {
    drive(){
        console.log("fast driving");
    }
}
// --------------------------------------------
class Vehicle {
    Vehicle(driveStrategy){
        this.driveStrategy = driveStrategy;
    }
}
class SportsVehicle extends Vehicle{
    SportsVehicle(){
        super(new SportsDriverStrategy());
    }
}

class SuvVehicle extends Vehicle{
    SuvVehicle(){
        super(new SuVDriverStrategy());
    }
}