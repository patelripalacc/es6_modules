//create and export car class to wishlist.js
export class Car {
  id;
  make;
  model;
  year;
  //Create a constructor for the Car class that:takes in id, make, model, and year parameters.
  constructor(id, make, model, year) {
    //sets each parameter to a property on the instance.
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
