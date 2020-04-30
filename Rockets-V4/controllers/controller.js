"use strict";
// variables ///////////////////////////
var rocket;
var rocket1;
var rocket2;
var rocketId;
var qThruster;
var thrusterValue;
var speedValue;
var thruster10 = new Thruster(10);
var thruster20 = new Thruster(20);
var thruster30 = new Thruster(30);
var thruster40 = new Thruster(40);
var thruster50 = new Thruster(50);
var thruster60 = new Thruster(60);
var thruster70 = new Thruster(70);
var thruster80 = new Thruster(80);
var parag = document.createElement("p");
//arrays /////////////////////////////////
var thrusters = new Array();
var rockets = new Array();
function createRocketOne() {
    cleanField();
    // variables ///////////////////////////
    rocket1 = new Rocket('32WESSDS');
    rocket1.addThruster(thruster10);
    rocket1.addThruster(thruster30);
    rocket1.addThruster(thruster80);
    rocket = rocket1;
    rocketId = rocket1.getId;
    qThruster = rocket1.thrusters.length;
    //avoid to add rocket if already exist //////////////
    var i = 0;
    var exist = false;
    while ((i < rockets.length)) {
        if ((rocket.getId == rockets[i].getId) && (exist == false)) {
            console.log("Ya existe este cohete");
            exist = true;
        }
        i++;
    }
    if (exist == false) {
        rockets.push(rocket);
    }
    // print thrusters max power ///////////////   
    thrusterValue = printThruster(rocket);
    // create message //////////////////////////  
    parag.innerHTML = "Rocket  " + rocketId + " has " + qThruster + " thrusters with max power: " + thrusterValue + " ";
    document.getElementById("printResult").appendChild(parag);
    // verify results in console ///////////////////
    console.log(rocket1);
    console.log(qThruster);
    console.log(rockets);
}
function createRocketTwo() {
    cleanField();
    // variables ///////////////////////////
    rocket2 = new Rocket('LDSFJA32');
    rocket2.addThruster(thruster30);
    rocket2.addThruster(thruster40);
    rocket2.addThruster(thruster50);
    rocket2.addThruster(thruster50);
    rocket2.addThruster(thruster30);
    rocket2.addThruster(thruster10);
    rocket = rocket2;
    rocketId = rocket2.getId;
    qThruster = rocket2.thrusters.length;
    //avoid to add rocket if already exist //////////////
    var i = 0;
    var exist = false;
    while ((i < rockets.length)) {
        if ((rocket.getId == rockets[i].getId) && (exist == false)) {
            console.log("Ya existe este cohete");
            exist = true;
        }
        i++;
    }
    if (exist == false) {
        rockets.push(rocket);
    }
    // print thrusters max power ///////////////   
    thrusterValue = printThruster(rocket);
    // create message //////////////////////////  
    parag.innerHTML = "Rocket  " + rocketId + " has " + qThruster + " thrusters with max power: " + thrusterValue + " ";
    document.getElementById("printResult").appendChild(parag);
    // verify results in console ///////////////////
    console.log(rocket);
    console.log(qThruster);
    console.log(rockets);
}
function printThruster(rocketVar) {
    var result = "";
    for (var i = 0; i < rocketVar.thrusters.length; i++) {
        result += rocketVar.thrusters[i].getMaxPower + ", ";
    }
    return result;
}
function speed(rocket) {
    var currentPower = rocket.getCurrentPower;
    var totalSpeed;
    var sum = sumPower(rocket);
    totalSpeed = sum + currentPower;
    return totalSpeed;
}
function sumPower(rocket) {
    var sumPower = 0;
    for (var i = 0; i < rocket.thrusters.length; i++) {
        sumPower += rocket.thrusters[i].getMaxPower;
    }
    return sumPower;
}
function accelerateRocketOne() {
    cleanField();
    rocket = rocket1;
    rocketId = rocket1.getId;
    var sum = sumPower(rocket);
    var currentPower = rocket.getCurrentPower;
    rocket.accelerate(sum);
    if (currentPower >= sum) {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + " <br>\n        <br>You have achieved the max power";
    }
    else {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + "  ";
    }
    document.getElementById("printResult").appendChild(parag);
}
function accelerateRocketTwo() {
    cleanField();
    rocket = rocket2;
    rocketId = rocket2.getId;
    var sum = sumPower(rocket);
    var currentPower = rocket.getCurrentPower;
    rocket.accelerate(sum);
    if (currentPower >= sum) {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + " <br>\n        <br>You have achieved the max power";
    }
    else {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + "  ";
    }
    document.getElementById("printResult").appendChild(parag);
}
function brakeRocketOne() {
    cleanField();
    rocket = rocket1;
    rocketId = rocket1.getId;
    var currentPower = rocket.getCurrentPower;
    rocket.brake();
    if (currentPower <= 0) {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + " <br>\n        <br>Power cannot be less than 0";
    }
    else {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + "  ";
    }
    document.getElementById("printResult").appendChild(parag);
}
function brakeRocketTwo() {
    cleanField();
    rocket = rocket2;
    rocketId = rocket2.getId;
    var currentPower = rocket.getCurrentPower;
    rocket.brake();
    if (currentPower <= 0) {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + " <br>\n        <br>Power cannot be less than 0";
    }
    else {
        parag.innerHTML = "Rocket  " + rocketId + " <br>Current power: " + currentPower + "  ";
    }
    document.getElementById("printResult").appendChild(parag);
}
function printRocketOne() {
    cleanField();
    rocket = rocket1;
    rocketId = rocket1.getId;
    qThruster = rocket1.thrusters.length;
    // print speed ///////////////   
    speedValue = speed(rocket);
    // print thrusters max power ///////////////   
    thrusterValue = printThruster(rocket);
    // create message //////////////////////////  
    parag.innerHTML = "Rocket  " + rocketId + " has " + qThruster + " thrusters with max power: " + thrusterValue + " \n        <br>Speed " + speedValue + " ";
    document.getElementById("printResult").appendChild(parag);
}
function printRocketTwo() {
    cleanField();
    rocket = rocket2;
    rocketId = rocket2.getId;
    qThruster = rocket2.thrusters.length;
    // print speed ///////////////   
    speedValue = speed(rocket);
    // print thrusters max power ///////////////   
    thrusterValue = printThruster(rocket);
    // create message //////////////////////////  
    parag.innerHTML = "Rocket  " + rocketId + " has " + qThruster + " thrusters with max power: " + thrusterValue + " \n        <br>Speed " + speedValue + " ";
    document.getElementById("printResult").appendChild(parag);
}
function printAllRockets() {
    cleanField();
    var i = 0;
    var currentPower;
    while (i < rockets.length) {
        rocketId = rockets[i].getId;
        qThruster = rockets[i].thrusters.length;
        thrusterValue = printThruster(rockets[i]);
        currentPower = rockets[i].getCurrentPower;
        speedValue = speed(rockets[i]);
        parag.innerHTML += "Rocket  " + rocketId + " has " + qThruster + " thrusters with max power: " + thrusterValue + " \n            <br>Current power " + currentPower + "\n            <br>Speed " + speedValue + " <br><br>";
        i++;
    }
    document.getElementById("printResult").appendChild(parag);
}
function cleanField() {
    parag.innerHTML = "";
}
