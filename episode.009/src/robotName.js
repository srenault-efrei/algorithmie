
export default class robotName {


    constructor() {
        this.usedNames = new Set()
        this.name = this.createName()
    }

    regenerateName() {
        this.name=this.createName()
        if(this.usedNames.has(this.name)){
            this.regenerateName()
        } 
    }
    createName(){
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let name = "";
        for (let i = 0; i < 2; i++) {
            let index = Math.floor(Math.random() * Math.floor(alphabet.length));
            name += alphabet[index];
        }
        for (let j = 0; j < 3; j++) {
            let number = Math.floor(Math.random() * Math.floor(9));
            name += number;
        }
        if (this.usedNames.has(name)){
            this.createName()
        }
        this.usedNames.add(this.name)
        
        return name
    }
}


