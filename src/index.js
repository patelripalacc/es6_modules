console.log("Hello World!");

// import wishlist class from wishlist.js
import { Wishlist } from "./wishlist";

////Select the form
let form = document.querySelector("#submitForm");
//Select the input for car make
let makeInput = document.querySelector("#makeInput");
//Select the input for car model
let modelInput = document.querySelector("#modelInput");
//Select the input for car year
let yearInput = document.querySelector("#yearInput");
//Select the paragraph element for car make
let carMake = document.querySelector("#car-make");
//Select the paragraph element for car model
let carModel = document.querySelector("#car-model");
//Select the paragraph element for car year
let carYear = document.querySelector("#car-year");
//Select the remove button
let removeButton = document.querySelector("#removeButton");
//Select the wishlist unordered list element
let wishlistUl = document.querySelector("#wishlistUl");

//Call the WishList constructor to create an instance from the WishList class
let wishlist = new Wishlist();

//add eventListener.
form.addEventListener("submit", addCar);

removeButton.addEventListener("click", removeCar);


//Create a function called showCarDetails that will update the details card with the details from the selected car.Take in a car parameter.
function showCarDetails(car) {
  //Reset the content of the make display to car.make.
  carMake.textContent = car.make;
  //Reset the content of the model display to car.model.
  carModel.textContent = car.model;
  //Reset the content of the year display to car.year.
  carYear.textContent = car.year;
  //Enable the remove button.
  removeButton.disabled = false;
  //Call setAttribute("data-carId", car.id) on the remove button
  removeButton.setAttribute("data-carId", car.id);
}
//Create a function called updateDomList that will update the ul with the latest cars in wishlist.
function updateDomList() {
  //Clear the contents of the ul. 
  wishlistUl.innerHTML = "";
  //Iterate over each car in wishlist.
  wishlist.list.forEach((car) => {
    //create li for each car in wishlist.
    const li = document.createElement("li");
    //assign each li a car make and car model.
    li.textContent = `${car.make} ${car.model}`;
    //add click eventListener on function showCarDetails.
    li.addEventListener("click", () => showCarDetails(car));
    //append each li to wishlistUl.
    wishlistUl.appendChild(li);
  });
}
//Create a function called addCar that will add a car to wishlist. It should:Take in an "event" parameter.
function addCar(event){
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    //Call wishlist.add with the values from the make, model and year inputs passed in as parameters.
    wishlist.add(make, model, year);
    //Call updateDomList.
    updateDomList();
}


//Create a function called removeCar that will remove a car from wishlist.
function removeCar() {
    //Assign the return of Number(removeButton.getAttribute("data-carId")) to a variable called carId.
    let carId = Number(removeButton.getAttribute("data-carId"));
    //Call wishlist.remove with carId passed in as a parameter.
    wishlist.remove(carId);
    //Call updateDOMList.
    updateDomList();
    //Reset the content of the carMake to "";
    carMake.textContent = "";
    //Reset the content of the carModel to "";
    carModel.textContent = "";
    //Reset the content of the carYear to "";
    carYear.textContent = "";
    //Disable the remove button;
    removeButton.disabled = true;
  }
  
