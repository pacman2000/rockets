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
    accelerate(sum:number){ 

        if(this.currentPower >= sum ){
            this.currentPower = sum;
        }else { 
            this.currentPower += 10; 
        }
        return this.currentPower;
    }     
    brake(){

        if(this.currentPower <= 0){           
            this.currentPower = 0;
        }else { 
            this.currentPower -= 10; 
        }
        return this.currentPower;
    } 
}
