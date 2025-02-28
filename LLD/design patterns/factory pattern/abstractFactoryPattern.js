// Step 1: Create abstract product interfaces
class Engine {
    start() {
        throw new Error('Method start() must be implemented');
    }
}

class Tire {
    roll() {
        throw new Error('Method roll() must be implemented');
    }
}

// Step 2: Create concrete product implementations for different families
class ElectricEngine extends Engine {
    start() {
        return 'Starting electric engine!';
    }
}

class GasEngine extends Engine {
    start() {
        return 'Starting gas engine!';
    }
}

class ElectricTire extends Tire {
    roll() {
        return 'Rolling with electric tires!';
    }
}

class GasTire extends Tire {
    roll() {
        return 'Rolling with gas tires!';
    }
}

// Step 3: Create abstract factory interface
class VehicleFactory {
    createEngine() {
        throw new Error('Method createEngine() must be implemented');
    }
    createTire() {
        throw new Error('Method createTire() must be implemented');
    }
}

// Step 4: Create concrete factories for each family
class ElectricVehicleFactory extends VehicleFactory {
    createEngine() {
        return new ElectricEngine();
    }
    createTire() {
        return new ElectricTire();
    }
}

class GasVehicleFactory extends VehicleFactory {
    createEngine() {
        return new GasEngine();
    }
    createTire() {
        return new GasTire();
    }
}

// Step 5: Client code using the abstract factory
function buildVehicle(factory) {
    const engine = factory.createEngine();
    const tire = factory.createTire();
    
    console.log(engine.start());  // Starting the engine
    console.log(tire.roll());     // Rolling with tires
}

// Client chooses which factory to use
const electricFactory = new ElectricVehicleFactory();
buildVehicle(electricFactory);
// Output:
// Starting electric engine!
// Rolling with electric tires!

const gasFactory = new GasVehicleFactory();
buildVehicle(gasFactory);
// Output:
// Starting gas engine!
// Rolling with gas tires!