// link - https://chatgpt.com/share/67111a88-b528-800f-9ee4-3c236d01b4bf

// Product class (Observable)
class Product {
    constructor(name, stock) {
        this.name = name;
        this.stock = stock;
        this.consumers = []; // Array to hold subscribed consumers
        this.wasOutOfStock = this.stock === 0; // Track if the product was out of stock
    }

    // Method for consumers to subscribe to the product
    subscribe(consumer) {
        this.consumers.push(consumer);
        console.log(`${consumer.name} has subscribed to ${this.name}.`);
    }

    // Method to unsubscribe consumers from the product
    unsubscribe(consumer) {
        this.consumers = this.consumers.filter(sub => sub !== consumer);
        console.log(`${consumer.name} has unsubscribed from ${this.name}.`);
    }

    // Notify all subscribed consumers when stock is greater than zero
    notify() {
        this.consumers.forEach(consumer => {
            consumer.update(this);
        });
    }
    // Method to update stock and notify consumers when stock becomes greater than zero
      updateStock(amount) {
        this.stock += amount;
        console.log(`${amount} units added. Stock for ${this.name}: ${this.stock}`);

        // Notify consumers when stock becomes greater than zero after being zero or was previously out of stock
        if (this.stock > 0 && this.wasOutOfStock) {
            console.log(`Stock for ${this.name} is now available! Notifying consumers...`);
            this.notify();
            this.wasOutOfStock = false; // Reset the out-of-stock status
        }

        // Mark as out of stock if stock reaches zero
        if (this.stock === 0) {
            this.wasOutOfStock = true;
        }
    }
};

// Consumer class (Observer)
class Consumer {
    constructor(name) {
        this.name = name;
    }

    // Method to be called when product stock is back in stock
    update(product) {
        console.log(`${this.name}, the stock of ${product.name} is now available! Current stock: ${product.stock}`);
    }
}

// Example usage

// Create products
let phone = new Product("Smartphone", 0);
let laptop = new Product("Laptop", 0);

// Create consumers
let john = new Consumer("John");
let alice = new Consumer("Alice");
let bob = new Consumer("Bob");

// Consumers subscribe to products
phone.subscribe(john);
phone.subscribe(alice);
laptop.subscribe(bob);

// Update product stock (stock becomes greater than zero)
phone.updateStock(5);  // Should notify subscribers since stock is greater than 0
laptop.updateStock(3); // Should notify subscribers since stock is greater than 0

// Unsubscribe a consumer
phone.unsubscribe(john);

// Further update product stock (adding more stock)
phone.updateStock(10); // Should not notify since stock is already greater than 0

// Update stock back to zero
phone.updateStock(-15); // No notification as stock is 0
laptop.updateStock(-3); // Stock becomes zero
