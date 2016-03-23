
interface IDice {
    value: number;
    newDiv: any;
    roll(): void;
    remove(): void;
}
class Die implements IDice {
    value: number;
    newDiv: HTMLDivElement;
    innerNum: number;
    roll(): void {
        // write the code for the roll function
        let value = Math.floor(Math.random() * 6) + 1;
        this.newDiv.innerHTML = String(value);
        
    }
    remove(): any {
        let parent = document.getElementById("container");
        parent.removeChild(this.newDiv);
        let foundAt = diceArray.indexOf(this);
        diceArray.splice(foundAt, 1);
    }
    
    // In your constructor, you should create a div, store it in the
    // this.div variable, and add a click listener to this.div
    constructor() {
        this.newDiv = document.createElement("div");
        this.newDiv.className = "dice";
        this.roll();
        this.newDiv.addEventListener("click", (e) => {
            this.roll();
        });
        this.newDiv.addEventListener("dblclick", (e) => {
            this.remove();
        });
        document.getElementById("container").appendChild(this.newDiv);  
    }
    
   
}
let diceArray: Array<Die> = [];
let addDie = function() {
    let newDie = new Die();
    diceArray.push(newDie);
}

let rollDice = function() {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
}
let sumDice = function() {
    let sum = 0;
    for (let i = 0; i < diceArray.length; i++) {
         let num = diceArray[i].newDiv.innerHTML;
         num = Number(num);
         sum += num;   
    }
    let message = "The Sum of All Dice = " + sum;
    alert(message);
}
document.addEventListener('DOMContentLoaded', function(){
document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("sumButton").addEventListener("click", sumDice);
document.getElementById("addButton").addEventListener("click", addDie);
});