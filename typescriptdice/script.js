var Die = (function () {
    // In your constructor, you should create a div, store it in the
    // this.div variable, and add a click listener to this.div
    function Die() {
        var _this = this;
        this.newDiv = document.createElement("div");
        this.newDiv.className = "dice";
        this.roll();
        this.newDiv.addEventListener("click", function (e) {
            _this.roll();
        });
        this.newDiv.addEventListener("dblclick", function (e) {
            _this.remove();
        });
        document.getElementById("container").appendChild(this.newDiv);
    }
    Die.prototype.roll = function () {
        // write the code for the roll function
        var value = Math.floor(Math.random() * 6) + 1;
        this.newDiv.innerHTML = String(value);
    };
    Die.prototype.remove = function () {
        var parent = document.getElementById("container");
        parent.removeChild(this.newDiv);
        var foundAt = diceArray.indexOf(this);
        diceArray.splice(foundAt, 1);
    };
    return Die;
}());
var diceArray = [];
var addDie = function () {
    var newDie = new Die();
    diceArray.push(newDie);
};
var rollDice = function () {
    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
};
var sumDice = function () {
    var sum = 0;
    for (var i = 0; i < diceArray.length; i++) {
        var num = diceArray[i].newDiv.innerHTML;
        num = Number(num);
        sum += num;
    }
    var message = "The Sum of All Dice = " + sum;
    alert(message);
};
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("rollButton").addEventListener("click", rollDice);
    document.getElementById("sumButton").addEventListener("click", sumDice);
    document.getElementById("addButton").addEventListener("click", addDie);
});
