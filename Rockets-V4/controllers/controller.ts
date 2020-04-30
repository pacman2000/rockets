// variables ///////////////////////////
let rocket: Rocket;
let rocket1: Rocket;
let rocket2: Rocket;
let rocketId: string;
let qThruster: number;
let thrusterValue: any;
let speedValue: number;
let thruster10: Thruster = new Thruster (10);
let thruster20: Thruster = new Thruster (20);
let thruster30: Thruster = new Thruster (30);
let thruster40: Thruster = new Thruster (40);
let thruster50: Thruster = new Thruster (50);
let thruster60: Thruster = new Thruster (60);
let thruster70: Thruster = new Thruster (70);
let thruster80: Thruster = new Thruster (80);
let parag: any = document.createElement("p"); 

//arrays /////////////////////////////////
let thrusters:Thruster[] = new Array();
let rockets:Rocket[] = new Array();

function createRocketOne(){
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
    let i:number = 0;
    let exist: boolean = false;
    while ((i < rockets.length)){       
        if ((rocket.getId == rockets[i].getId) && (exist == false)){
            console.log("Ya existe este cohete");            
            exist = true;
        }
        i++;        
    }
    if (exist == false){
        rockets.push(rocket); 
    }    
    
    // print thrusters max power ///////////////   
    thrusterValue =  printThruster(rocket);
   
    // create message //////////////////////////  
    parag.innerHTML = `Rocket  ${rocketId} has ${qThruster} thrusters with max power: ${thrusterValue} `;    
    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag);  
 
    // verify results in console ///////////////////
    console.log(rocket1);
    console.log(qThruster); 
    console.log(rockets);
           
}
function createRocketTwo(){
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
    let i:number = 0;
    let exist: boolean = false;
    while ((i < rockets.length)){       
        if ((rocket.getId == rockets[i].getId) && (exist == false)){
            console.log("Ya existe este cohete");            
            exist = true;
        }
        i++;        
    }
    if (exist == false){
        rockets.push(rocket); 
    }   

    // print thrusters max power ///////////////   
    thrusterValue =  printThruster(rocket);

    // create message //////////////////////////  
    parag.innerHTML = `Rocket  ${rocketId} has ${qThruster} thrusters with max power: ${thrusterValue} `;    
    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag);  

    // verify results in console ///////////////////
    console.log(rocket);
    console.log(qThruster);
    console.log(rockets);
}
function printThruster(rocketVar: any){    
    let result = "";   
    for (let i:number = 0; i < rocketVar.thrusters.length; i++){        
        result += rocketVar.thrusters[i].getMaxPower + ", ";                 
    } 
    return result;   
}
function speed(rocket: any){    
    let currentPower = rocket.getCurrentPower;
    let totalSpeed: number;
    let sum = sumPower(rocket);

    totalSpeed = sum + currentPower;
    return totalSpeed;
}
function sumPower(rocket: any){
    let sumPower: number = 0;
    for (let i: number = 0; i < rocket.thrusters.length; i++){
        sumPower += rocket.thrusters[i].getMaxPower;
    }
    return sumPower;
}
function accelerateRocketOne(){   
    cleanField(); 
    rocket = rocket1;
    rocketId = rocket1.getId;
    let sum = sumPower(rocket);  
    let currentPower = rocket.getCurrentPower;  

    rocket.accelerate(sum);     
    
    if(currentPower >= sum ){
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower} <br>
        <br>You have achieved the max power`;        
    }else {         
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower}  `; 
    }

    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag);  
}
function accelerateRocketTwo(){    
    cleanField(); 
    rocket = rocket2;
    rocketId = rocket2.getId;
    let sum = sumPower(rocket);    
    let currentPower = rocket.getCurrentPower;    

    rocket.accelerate(sum);     
    
    if(currentPower >= sum ){
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower} <br>
        <br>You have achieved the max power`;        
    }else {         
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower}  `; 
    }    

    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag);
}
function brakeRocketOne(){    
    cleanField(); 
    rocket = rocket1;
    rocketId = rocket1.getId;
    let currentPower = rocket.getCurrentPower;

    rocket.brake();  

    if(currentPower <= 0){
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower} <br>
        <br>Power cannot be less than 0`;
    }else { 
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower}  `; 
    }     
      
    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag); 
}
function brakeRocketTwo(){  
    cleanField(); 
    rocket = rocket2;
    rocketId = rocket2.getId;
    let currentPower = rocket.getCurrentPower;

    rocket.brake();  

    if(currentPower <= 0){
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower} <br>
        <br>Power cannot be less than 0`;
    }else { 
        parag.innerHTML = `Rocket  ${rocketId} <br>Current power: ${currentPower}  `; 
    }     
        
    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag);
}
function printRocketOne(){
    cleanField(); 
    rocket = rocket1;
    rocketId = rocket1.getId;
    qThruster = rocket1.thrusters.length;
    
    // print speed ///////////////   
    speedValue =  speed(rocket);

    // print thrusters max power ///////////////   
    thrusterValue =  printThruster(rocket);

    // create message //////////////////////////  
    parag.innerHTML = `Rocket  ${rocketId} has ${qThruster} thrusters with max power: ${thrusterValue} 
        <br>Speed ${speedValue} `;    
    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag); 
}
function printRocketTwo(){
    cleanField(); 
    rocket = rocket2;
    rocketId = rocket2.getId;
    qThruster = rocket2.thrusters.length;
    
    // print speed ///////////////   
    speedValue =  speed(rocket);

    // print thrusters max power ///////////////   
    thrusterValue =  printThruster(rocket);

    // create message //////////////////////////  
    parag.innerHTML = `Rocket  ${rocketId} has ${qThruster} thrusters with max power: ${thrusterValue} 
        <br>Speed ${speedValue} `;    
    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag); 
}
function printAllRockets(){
    cleanField(); 
    let i: number = 0;
    let currentPower; 

    while (i < rockets.length){  
        rocketId = rockets[i].getId;    
        qThruster = rockets[i].thrusters.length;  
        thrusterValue =  printThruster(rockets[i]); 
        currentPower = rockets[i].getCurrentPower; 
        speedValue =  speed(rockets[i]);       
        
        parag.innerHTML += `Rocket  ${rocketId} has ${qThruster} thrusters with max power: ${thrusterValue} 
            <br>Current power ${currentPower}
            <br>Speed ${speedValue} <br><br>`;         
        i++
    }  
    (<HTMLInputElement>document.getElementById("printResult")).appendChild(parag);
}
function cleanField(){
    parag.innerHTML = "";   
}
