import Car from "./Car.js";

class Wishlist_{
constructor() {
    this.list = [];
    this.nextID = 0;

    }
    add(make, model, year) {
       const Car = new Car(++this.nextID. make, model, year);
       this.list.push(car);

    }
    remove(carID){
        this.list = this.list.filter((car) => {
        return car.id != carId;
    });
}

}