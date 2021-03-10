class Passenger{
    constructor(firstName, lastName, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, id, search){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.birthday = birthday;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.dateLeaving = dateLeaving;
        this.dateReturning = dateReturning;
        this.numberOfBags = numberOfBags;
        this.search = search;
        // this.duration = duration;
    }
}

let passengerList = [];
let idCount = 1;

function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthday = document.getElementById("birthday").value;
    let departureCity = document.getElementById("departureCity").value;
    let arrivalCity = document.getElementById("arrivalCity").value;
    let dateLeaving = document.getElementById("dateLeaving").value;
    let dateReturning = document.getElementById("dateReturning").value;
    let numberOfBags = document.getElementById("numberOfBags").value; 

    let birthdayNumbers = birthday.split("");
    console.log(birthdayNumbers);
    let canDrink = false;
    let age = birthday - birthdayNumbers[0];
    if(age += 21){
        canDrink = true;
    }

    let extraCost = 0;
    extraCost += numberOfBags * 20;

    leavingNumbers = new Date(dateLeaving);
    returningNumbers = new Date(dateReturning);
    console.log(leavingNumbers)
    let dayGone = leavingNumbers.getTime() - returningNumbers.getTime();
    dayGone = Math.abs(dayGone/ 1000 / 100 / 60 / 24)

    birthday = new Date(birthday);

    // let age = Date.now

    if(firstName != "" && lastName != "" && birthday != "" && departureCity != "" && arrivalCity != "" && dateLeaving != "" && dateReturning != "" && search != ""){
        let passenger = new Passenger(firstName, lastName, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, search, idCount);
        idCount ++;

        passengerList.push(passenger);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("birthday").value = "";
        document.getElementById("departureCity").value = "";
        document.getElementById("arrivalCity").value = "";
        document.getElementById("dateLeaving").value = "";
        document.getElementById("dateReturning").value = "";
        document.getElementById("numberOfBags").value = "";
        document.getElementById("search").value = "";
    } 
}

let radioButtons = document.getElementsByName("meal")

function print(){
    let space = document.getElementById("printSpace");
    space.innerHTML = "";
    for(let i = 0; i < passengerList.length; i++){
        space.innerHTML += `<div><span>${passengerList[i].id}</span>${passengerList[i].firstName} ${passengerList[i].lastName} ${passengerList[i].birthday} ${passengerList[i].departureCity} ${passengerList[i].arrivalCity} ${passengerList[i].dateLeaving} ${passengerList[i].dateReturning} ${passengerList[i].numberOfBags} ${passengerList[i].search}</div>`
    }
}

function search(){
    let searchID = document.getElementById("search").value
    for(let i = 0; i < passengerList.length; i++){
        if (passengerList[i].firstName == searchID){
            let firstName = document.getElementById("outfirstName").value = passengerList[i].firstName;
            let lastName = document.getElementById("outlastName").value = passengerList[i].lastName;
            let birthday = document.getElementById("outDoB").value = passengerList[i].birthday;
            let departureCity = document.getElementById("outdeparting").value = passengerList[i].departureCity;
            let arrivalCity = document.getElementById("outarriving").value = passengerList[i].arrivalCity;
            let dateLeaving = document.getElementById("outleaveDate").value = passengerList[i].dateLeaving;
            let dateReturning = document.getElementById("outreturnDate").value = passengerList[i].dateReturning;
            let numberOfBags = document.getElementById("numberOfBags").value = passengerList[i].numberOfBags; 
        } 
    }
    document.getElementById("updateList()")
}