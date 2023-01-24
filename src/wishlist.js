//import class Car from car.js
import { Car } from "./car";

//create and export Wishlist class to index.js
export class Wishlist {
  list;
  nextId;
  constructor() {
    this.list = [];
    this.nextId = 0;
  }
  //Create an add method that:Takes in make, model, and year parameters.
  add(make, model, year) {
    //Uses the Car constructor from car.js to create a car instance from ++this.nextId, make, model, and year values.
    let car = new Car(++this.nextId, make, model, year);
    //Adds the car instance to this.list.
    this.list.push(car);
  }
  //Create a remove method that:Takes in carId as a parameter.
  remove(carId) {
    //find a  car instance whose id matches carId from this.list to remove.
    let index = this.list.findIndex((car) => car.id == carId);
    //remove a car and update wishlist.
    this.list.splice(index, 1);
  }
}
