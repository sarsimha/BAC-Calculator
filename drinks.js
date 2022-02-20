localStorage.getItem("person");
localStorage.getItem("numDrinks");
let totalDrinks =  [];

document.getElementById("bcButton").onclick = function() {
    const d = new Date();
    let time = d.getTime();
    drink = {"Time": time,  "Volume": document.getElementById("Volume").value, "ABV": document.getElementById("ABV").value};
    numDrinks++;
    totalDrinks.push(drink);
    localStorage.setItem("totaldrinks", JSON.stringify(totalDrinks));

}


class drink {
    constructor(time, volume, abv) {
        this.time = time;
        this.volume = volume;
        this.abv = abv;
    }

    getVolume() {
        return this.volume;
    }

    getAbv(){
        return this.abv;
    }
}