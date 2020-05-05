let contacts = [
    {
        name: "Lisa",
        phone: "248-248-1234",
        relation: "family",
    },
    {
        name: "Leon",
        phone: "248-248-5678",
        relation: "family",
    },
    {
        name: "Kyle",
        phone: "248-248-9101",
        relation: "colleague",
    },
    {
        name: "Jack",
        phone: "248-248-1121",
        relation: "friend",
    },
    {
        name: "Isaac",
        phone: "248-248-3141",
        relation: "friend",
    },
    {
        name: "Alyssa",
        phone: "248-248-5161",
        relation: "friend",
    },
    {
        name: "Joshua",
        phone: "248-248-7181",
        relation: "friend",
    },
    {
        name: "Rob",
        phone: "248-248-9202",
        relation: "friend",
    },
    {
        name: "Jon",
        phone: "248-248-1222",
        relation: "friend",
    },
    {
        name: "Amanda",
        phone: "248-248-3242",
        relation: "friend",
    },
    {
        name: "Danielle",
        phone: "248-248-5262",
        relation: "friend",
    },
    {
        name: "Katie",
        phone: "248-248-7282",
        relation: "friend",
    },
    {
        name: "Sabbir",
        phone: "248-248-9303",
        relation: "friend",
    },
    {
        name: "Julie",
        phone: "248-248-1323",
        relation: "friend",
    },
    {
        name: "Cassie",
        phone: "248-248-3343",
        relation: "friend",
    },
    {
        name: "Kelly",
        phone: "248-248-5363",
        relation: "friend",
    },
    {
        name: "Jake",
        phone: "248-248-7383",
        relation: "friend",
    },
];
let container = document.querySelector(".main-content"); //targets ul element
contacts.forEach((contact) => {
  let card = document.createElement("li"); //card stored as a li in the ul
card.classList.add("card"); //creates the class 'card', an attribute of the li elements
// card.setAttribute("class", "card");
//inside the li are three p elements 
let name = document.createElement("p");
name.innerText = contact.name;  //text inside element is replaced by contact.name
let phone = document.createElement("p");
phone.innerText = contact.phone;
let relation = document.createElement("p");
relation.innerText = contact.relation;
let button = document.createElement("button");  //button element is container w/ class 'delete'
button.classList.add("delete");
let icon = document.createElement("i");    //icon from awesomefont.com
icon.classList.add("fas","fa-times");
button.append(icon);    //places icon inside button container
card.append(name, phone, relation,button);  //places p elements and button inside li elements

container.append(card); //places li elements inside ul

})

let heading = document.querySelector(".heading");
console.log(heading);
heading.style.backgroundColor = "grey";

let contactCounter = document.querySelector(".contact-counter");
contactCounter.innerText = `Contacts: ${contacts.length}`;  //counts the number of objects in the array contacts

let addButton = document.querySelector(".plus-icon");
let formContainer =  document.querySelector(".form-container");
addButton.addEventListener("click",() => {  //when the plus icon is clicked, the form appears
  formContainer.style.display= "flex";
})

// const addFunc = () => {
//   formContainer.style.display= "flex";
// }
// addButton.addEventListener("click",addFunc);
//use this if you need to remove an Event Listener!
