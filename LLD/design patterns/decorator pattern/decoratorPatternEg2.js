// act as an interface;
class basePizza {
    cost(){
        throw new Error("implement this function");
    }
}
class MargritaPizza extends basePizza {
    cost(){
        return 100;
    }
}
class VegDelight extends basePizza{
    cost(){
        return 200;
    }
}
class ChickenPizza extends basePizza{
    cost(){
        return 300;
    }
}
// decorators / toppings here 
// interface
class ToppingDecorator extends basePizza{
    
}
class ExtraCheeseDecorator{
    constructor(pizza){
        this.pizza =  pizza;
    }
    cost(){
        return this.pizza.cost() + 50;
    }
};
class PeporoniDecorator{
    constructor(pizza){
        this.pizza =  pizza;
    }
    cost(){
        return this.pizza.cost() + 100;
    }
};
// usage 
let margritaPizza = new MargritaPizza();
console.log("margritaPizza pizza cost : ",margritaPizza.cost());
margritaPizza = new PeporoniDecorator(new ExtraCheeseDecorator(margritaPizza));
console.log("margritaPizza + peporoni + extracheese", margritaPizza.cost());
// simmilary we can make diff pizzas;