/* Q. Question: Implement the Observer Pattern in JavaScript where a WeatherStation (subject) notifies multiple Display devices (observers) when the temperature changes. */

// observer class
class WeatherStation {
    
    constructor(temp){
        this.temp = temp;
        this.devices = [];
    }
    subscribe(device){
        this.devices.push(device);
        console.log(`${device.name} is subscirbed to wheater station`);
    }
    notify(){
        this.devices.forEach(device => {
            device.update(this);
        });
    }
    updateTemp(temp){
        this.temp = temp;
        this.notify();
    }
};

class Device{
    constructor(name){
        this.name = name;
    }
    update(station){
        console.log(`update from ${this.name}: ${station.temp} updated`);
    }
}

let weatherStation = new WeatherStation('0 degree');
let mobileDevice = new Device('mobile Device');
let desktopDevice = new Device('Desktop Device');

weatherStation.subscribe(mobileDevice);
weatherStation.subscribe(desktopDevice);

weatherStation.updateTemp('10 degree');
weatherStation.updateTemp('20 degree');
