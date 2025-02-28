/*
When to Use the Strategy Pattern
- When you need different variations of an algorithm, and you don’t want to clutter the client code with multiple if-else or switch-case statements.
- When you want to adhere to the Open/Closed Principle: open for extension (you can add new strategies) but closed for modification (you don’t need to change existing code).
- When multiple algorithms share similar steps but have different behaviors for some parts, separating the behaviors makes the system more modular.
*/

class PaymentProcessor {
    processPayment(method, amount) {
      if (method === 'creditcard') {
        console.log(`Paid ${amount} using Credit Card`);
      } else if (method === 'paypal') {
        console.log(`Paid ${amount} using PayPal`);
      } else if (method === 'bitcoin') {
        console.log(`Paid ${amount} using Bitcoin`);
      } else {
        console.log('Invalid payment method');
      }
    }
  }
  
  // Usage Example
  const paymentProcessor = new PaymentProcessor();
  paymentProcessor.processPayment('creditcard', 100);  // Output: Paid 100 using Credit Card
  paymentProcessor.processPayment('paypal', 200);      // Output: Paid 200 using PayPal
  paymentProcessor.processPayment('bitcoin', 300);     // Output: Paid 300 using Bitcoin

//   using strategy Pattern

// ---------- strategy --------------
class PaymentStrategy {
    pay(amount) {
      throw new Error('This method should be overridden');
    }
}
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ${amount} using Credit Card`);
    }
  }
  
  class PayPalPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ${amount} using PayPal`);
    }
  }
  
  class BitcoinPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ${amount} using Bitcoin`);
    }
  }
  // ----------------------------
  class PaymentProcessor {
    constructor(strategy) {
      this.strategy = strategy;  // Payment strategy passed via constructor
    }
  
    setPaymentStrategy(strategy) {
      this.strategy = strategy;  // Dynamically change the strategy if needed
    }
  
    processPayment(amount) {
      this.strategy.pay(amount);  // Delegate the payment to the strategy
    }
  }

const paymentProcessor1 = new PaymentProcessor(new CreditCardPayment());
paymentProcessor1.processPayment(100);  // Output: Paid 100 using Credit Card

// Switching to PayPal
paymentProcessor1.setPaymentStrategy(new PayPalPayment());
paymentProcessor1.processPayment(200);  // Output: Paid 200 using PayPal

// Switching to Bitcoin
paymentProcessor1.setPaymentStrategy(new BitcoinPayment());
paymentProcessor1.processPayment(300);  // Output: Paid 300 using Bitcoin