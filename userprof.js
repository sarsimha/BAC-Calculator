//create a user object
let person;
let numDrinks;
numDrinks = 0;
localStorage.setItem("numDrinks", numDrinks);

document.getElementById("myButton").onclick = function() {
    const d = new Date();
    let time = d.getTime();
    person = {"fname": document.getElementById("fname"), 
    "lname": document.getElementById("lname").value, "weight": document.getElementById("weight").value, "sex": document.getElementById("sex").value,
        "time": time, "emergency": document.getElementById("emergencyContact").value, "contact": document.getElementById("emergencyName").value }
    console.log(person.fname)
    localStorage.setItem("person". JSON.stringify(person))


}


class user{
    constructor(first, last, weight, gender, time, friendName, friendContact) {
        this.first = first;
        this.last = last;
        this.weight = weight;
        this.gender = gender;
        this.time = time;
        this.friendName = friendName;
        this.friendContact = friendContact;
    }
    
    getFirstName() {
        return this.first;
    }

    getLastName() {
        return this.last;
    }

    getWeight() {
        this.weight;
    }

    getGender() {
        this.gender;
    }

    getTime() {
        this.time;
    }

    getFriend(){
        this.friendName;
    }

    getContact(){
        this.friendContact;
    }
}