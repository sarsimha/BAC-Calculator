let num = localStorage.getItem("numDrinks");
let totalDrinks =  [];
localStorage.setItem("num", num);

document.getElementById("bcButton").onclick = function() {
    const d = new Date();
    let time = d.getTime();
    drink = {"Time": time,  "Volume": document.getElementById("Volume").value, "ABV": document.getElementById("ABV").value};
    num++;
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