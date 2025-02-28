//read this --> https://chatgpt.com/share/67116397-af64-800f-b768-435308b0a76e

// Step 1: Create Constructor Functions (or Classes) for Car and Bike
class Car {
    constructor() {
        this.type = 'Car';
        this.wheels = 4;
    }
    drive() {
        return 'Driving a car!';
    }
}

class Bike {
    constructor() {
        this.type = 'Bike';
        this.wheels = 2;
    }
    ride() {
        return 'Riding a bike!';
    }
}

// Step 2: Create the Factory
class VehicleFactory {
    createVehicle(vehicleType) {
        switch (vehicleType) {
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            default:
                throw new Error('Unknown vehicle type');
        }
    }
}

// Step 3: Use the Factory to create objects
const factory = new VehicleFactory();

const car = factory.createVehicle('car');
console.log(car.type); // Output: Car
console.log(car.drive()); // Output: Driving a car!

const bike = factory.createVehicle('bike');
console.log(bike.type); // Output: Bike
console.log(bike.ride()); // Output: Riding a bike!

// Why Use the Factory Pattern?
// read this https://chatgpt.com/share/67116397-af64-800f-b768-435308b0a76e