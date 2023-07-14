import wishlist from "./wishlist.js";

const submitForm = document.querySelector ("#submitForm");
const make = document.querySelector ("#make");
const model = document.querySelector ("#model");
const year = document.querySelector ("#year");
const carMakeP = document.querySelector ("#carMake");
const carModelP = document.querySelector ("#modelP");
const YearP = document.querySelector ("#yearP");
const removeBtn = document.querySelector ("#removeBtn");
const wishlistUL = document.querySelector("wishlist > UL");

const wishlist = new wishlist();
submitForm.addEventListener ("submit", addCar);
removeBtn.addEventListener("click" , removeCar);

function addCar(event){
    event.preventDefault();
    const make = makeInput.value;
    const model = modelInput.value;
    const yeah = yearInput.value;
    wishlist.add(make, model, year);
    updateDomList();

    function removeCar(){
        const carId = number(removeBtn.getAttribute("data-carID"));
        wishlist.remove(carId);
        updateDomList();
        carMakeP.textContent = "";
        carModelP.textContent = "";
        carYearP.textContent = "";
        removeBtn.disable = true;
    }
}
function showCardDetails(car){
carMakeP.textContent = car.make;
carModelP.textContent = car.model;
carYear.textContent = car.year;
removeBtn.disabled = false;
removeBtn.setAttribute("data-carId", car.id);

}

function updateDomList(wishlist){
wishlist.ul.innerHtml = "";
wishlist.listforEach((car) =>{

    const newLi = document.createElement("li");
    constnewMakeP = document.createElement("p");
    constnewModelP = document.createElement("p");

    newLi.addEventListener("click",() =>  {
        showCardDetails(car);
    })
    
    newMakeP.textContent = `${car.make.}`;
    newModelP.textContent = `${car.model}`;
    nrewModelP.textContent = `${car.model}`;
    
});
}


//
