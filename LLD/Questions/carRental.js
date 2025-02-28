// Car Class
class Car {
    constructor(carId, model, price, location) {
        this.carId = carId;
        this.model = model;
        this.price = price;
        this.availability = true; // Availability flag
        this.location = location;
    }

    // Method to set car availability
    setAvailability(status) {
        this.availability = status;
    }

    // Get car details
    getDetails() {
        return {
            carId: this.carId,
            model: this.model,
            price: this.price,
            availability: this.availability,
            location: this.location
        };
    }
}

// Store Class
class Store {
    constructor(locationId, locationName) {
        this.locationId = locationId;
        this.locationName = locationName;
        this.carList = [];
    }

    // Method to add cars to the store
    addCar(car) {
        this.carList.push(car);
    }

    // Get available cars
    getAvailableCars() {
        return this.carList.filter(car => car.availability);
    }
}

// Customer Class
class Customer {
    constructor(name, email, phone, location) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.location = location;
    }

    // Method to search available cars in a store
    searchCars(store) {
        return store.getAvailableCars();
    }

    // Method to book a car
    bookCar(store, carId, startTime, endTime) {
        const availableCars = this.searchCars(store);
        const car = availableCars.find(c => c.carId === carId);
        
        if (car) {
            const reservation = new Reservation(this, car, startTime, endTime);
            car.setAvailability(false);  // Mark car as unavailable
            reservation.createReservation();
            Notification.sendNotification(this, `Reservation Confirmed for Car: ${car.model}`);
            return reservation;
        } else {
            console.log("Car not available.");
            return null;
        }
    }
}

// Reservation Class
class Reservation {
    static reservationCounter = 1;

    constructor(customer, car, startTime, endTime) {
        this.reservationId = Reservation.reservationCounter++;
        this.customer = customer;
        this.car = car;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalAmount = this.calculateAmount();
        this.paymentStatus = false;
    }

    // Calculate total amount based on time
    calculateAmount() {
        const hours = (new Date(this.endTime) - new Date(this.startTime)) / (1000 * 60 * 60);
        return hours * this.car.price;
    }

    // Create reservation
    createReservation() {
        console.log(`Reservation ${this.reservationId} created for ${this.customer.name} for car ${this.car.model}`);
    }

    // Cancel reservation
    cancelReservation() {
        console.log(`Reservation ${this.reservationId} cancelled.`);
        this.car.setAvailability(true);
    }
}

// Payment Class
class Payment {
    constructor(amount, method) {
        this.paymentId = Date.now();
        this.amount = amount;
        this.method = method;
        this.status = "Pending";
    }

    // Process payment
    processPayment() {
        console.log(`Processing payment of ₹${this.amount} via ${this.method}...`);
        this.status = "Completed";
        console.log(`Payment successful. Status: ${this.status}`);
    }
}

// Notification Class
class Notification {
    static sendNotification(customer, message) {
        console.log(`Notification sent to ${customer.email}: ${message}`);
    }
}

// Example Usage
const store = new Store(1, "Downtown Store");
const car1 = new Car(101, "Toyota Camry", 500, store);
const car2 = new Car(102, "Honda Civic", 400, store);

store.addCar(car1);
store.addCar(car2);

const customer = new Customer("Raghav", "raghav@example.com", "9876543210", "Downtown");

console.log("Available Cars:", customer.searchCars(store));

// Customer books a car
const reservation = customer.bookCar(store, 101, "2024-10-20T09:00:00", "2024-10-20T13:00:00");

if (reservation) {
    const payment = new Payment(reservation.totalAmount, "UPI");
    payment.processPayment();
}
