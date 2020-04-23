class Rocket{
    id: string;
    currentPower: number;
    speed: number;
    thrusters:Thruster[] = new Array();   
    
    constructor(id: string){
        this.id = id;   
        this.currentPower = 0;    
        this.speed = 0;
    }
    get getId(){
        return this.id;
    }
    get getCurrentPower(){
        return this.currentPower;
    }
    get getSpeed(){
        return this.speed;
    }       
    
    addThruster(thruster: Thruster): void{
        this.thrusters.push(thruster);
    }
    accelerate(){
        this.currentPower += 10; 
        return this.currentPower;
    }     
    brake(){
        this.currentPower -= 10;
        return this.currentPower;
    } 
}
