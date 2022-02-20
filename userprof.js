//create a user object

document.getElementById("myButton").onclick = function() {
    person = new user(document.getElementById("fname"), 
        document.getElementById("lname").value, document.getElementById("weight").value, document.getElementById("sex").value,
        document.getElementById("timeDrinking").value, document.getElementById("emergencyContact").value, document.getElementById("emergencyName").value) 
        console.log(person.getFirstName);


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