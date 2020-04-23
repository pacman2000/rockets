class Thruster{
    public maxPower: number;    

    constructor(maxPower: number){
        this.maxPower = maxPower;              
    }

    get getMaxPower(){
        return this.maxPower;
    }   
}