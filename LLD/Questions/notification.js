/*
Create a monitoring system that tracks performance metrics with the following attributes: Timestamp, Node Name, Metric Type (which can be CPU, Memory, Disk, or Network), and Metric Value. The system should trigger an alert if the average value of a specific metric type (e.g., CPU or Memory) exceeds a defined threshold 
𝑌
Y over the last 1 hour, allowing for a margin of ±5%.

As part of the alert, the system must include details about the average metric value for each individual node. */

//act as an interface;
class MetricStrategy {
    constructor(metricValue){
        this.metricValue = metricValue;
    }
    name(){
     throw new Error('Err:: implement this method')
    }
}
class MemoryMetric extends MetricStrategy {
    constructor(metricValue){
        super(metricValue);
    }
    // can create getter/setter for metricValue
    name(){
        console.log("this is Memory metric type")
    }
}
class DiskMetric extends MetricStrategy {
    constructor(metricValue){
        super(metricValue);
    }
     // can create getter/setter for metricValue
    name(){
        console.log("this is DISK metric type")
    }
}
class CpuMetric extends MetricStrategy {
    constructor(metricValue){
        super(metricValue);
    }
    // can create getter/setter for metricValue
    name(){
        console.log("this is CPU metric type")
    }
}

class Node {
    constructor(name,metricStrategy){
        this.name = name;
        this.metric = metricStrategy;
    }
    alert(y){
        console.log(`ALERT: threshold value ${y} >  ${this.metric.metricValue}`);
    }
}
class MonitoringSystem{
    constructor(){
        this.nodes = [];
    }
    addNode(node){
        //can add check to see if node already added to monitoring system
        this.nodes.push(node);
        console.log(`${node.name} added to monitoring sytem`);
    }
    removeNode(node){
        this.nodes = this.nodes.filter((n)=>{n.name != node.name});
        console.log(`${node.name} removed from monitoring sytem`);
    }
    changeThreshHold(y){
        this.nodes.forEach(node => {
            if(node.metric.metricValue < y){
                node.alert(y);
            }
        });
    }
}

let cpuMetric = new CpuMetric(10);
let memoryMetric = new MemoryMetric(15);

let node1 = new Node('payementNode',cpuMetric);
let node2 = new Node('notificationNode',memoryMetric);

let monitoringSystem = new MonitoringSystem();
monitoringSystem.addNode(node1);
monitoringSystem.addNode(node2);

monitoringSystem.changeThreshHold(12);

console.log("-----------------------");

monitoringSystem.changeThreshHold(20);
