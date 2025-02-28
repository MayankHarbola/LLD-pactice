// read this https://chatgpt.com/share/67136bb3-9528-800f-a648-fe72d9a48aa0

class ParkingLot {
    constructor(rows, cols, pricingStrategy){
        this.spots = this.createParkingSpots(rows, cols);
        this.entryGate = new EntryGate('G1');
        this.exitGate = new ExitGate('G1', pricingStrategy);
        this.pricingStrategy = pricingStrategy;
    }
    createParkingSpots(rows, cols) {
        let spots = [];
        for (let i = 0; i < rows * cols; i++) {
          spots.push(new ParkingSpot(`S${i + 1}`, 'Regular'));
        }
        return spots;
    }
    assignSpot(vehicle) {
        // Find the closest available spot to the entry gate
        for (let spot of this.spots) {
          if (spot.isAvailable && spot.canFitVehicle(vehicle)) {
            spot.markOccupied();
            return spot;
          }
        }
        return null; // No spots available
    }
    releaseSpot(spot, vehicle) {
        spot.markAvailable();
    }
    getAvailableSpots() {
        return this.spots.filter(spot => spot.isAvailable);
    }
    
    calculateFee(vehicle, timeParked) {
        return this.pricingStrategy.calculateFee(timeParked);
    }
}
class ParkingSpot {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.isAvailable = true;
      }
      markOccupied() {
        this.isAvailable = false;
      }
    
      markAvailable() {
        this.isAvailable = true;
      }
    
      canFitVehicle(vehicle) {
        // Logic to check if the vehicle fits in the spot
        return true; // Simplified for now
      }
}
class Vehicle {
    constructor(vehicleNumber, vehicleType) {
      this.vehicleNumber = vehicleNumber;
      this.vehicleType = vehicleType;
    }
}
class EntryGate {
    constructor(gateId) {
      this.gateId = gateId;
    }
  
    issueTicket(vehicle) {
      const entryTime = new Date();
      const ticket = new Ticket(vehicle, entryTime);
      return ticket;
    }
}

class ExitGate {
    constructor(gateId, pricingStrategy) {
      this.gateId = gateId;
      this.pricingStrategy = pricingStrategy;
    }
  
    processPayment(ticket) {
      const exitTime = new Date();
      ticket.setExitTime(exitTime);
      const duration = ticket.calculateDuration();
      const fee = this.pricingStrategy.calculateFee(duration);
      return fee;
    }
}

class Ticket {
    constructor(vehicle, entryTime) {
      this.vehicle = vehicle;
      this.entryTime = entryTime;
      this.exitTime = null;
    }
  
    setExitTime(exitTime) {
      this.exitTime = exitTime;
    }
  
    calculateDuration() {
      const diff = this.exitTime - this.entryTime;
      return Math.ceil(diff / (1000 * 60 * 60)); // Duration in hours
    }
}

class PricingStrategy {
    constructor(hourlyRate, monthlyRate, yearlyRate) {
      this.hourlyRate = hourlyRate;
      this.monthlyRate = monthlyRate;
      this.yearlyRate = yearlyRate;
    }
  
    calculateFee(duration) {
      return duration * this.hourlyRate;
    }
}

const pricingStrategy = new PricingStrategy(10, 100, 1000);
const parkingLot = new ParkingLot(4, 4, pricingStrategy);

const vehicle = new Vehicle('AB1234', 'FourTire');
const spot = parkingLot.assignSpot(vehicle);

if (spot) {
    console.log(`Assigned spot: ${spot.id}`);
    const ticket = parkingLot.entryGate.issueTicket(vehicle);
    const fee = parkingLot.exitGate.processPayment(ticket);
    console.log(`Payment due: $${fee}`);
}


