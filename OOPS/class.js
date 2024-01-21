class Pizza {
  constructor(size = "s", crust, style) {
    this.size = size;
    this.crust = crust;
    this.style = style;
    this.toppings = [" cheese", " Sauce"];
  }
  addTopping(toppingArr) {
    for (let topping of toppingArr) {
      this.toppings.push(topping);
    }
  }
  printDetails() {
    console.log(
      `Size: ${this.size}, Crust: ${this.crust}, Style: ${this.style}, Toppings: ${this.toppings} `
    );
  }
  set pizzaSize(size) {
    if (size === "THE MFING SUN" || size === "SMOL" || size === "KINDA SMALL")
    this.size = size;
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    console.log(basePrice + (this.toppings.length * toppingPrice * 1.88));
  }
}

let pizza1 = new Pizza( "Big",
  "As Non Existant as Your Dad",
  "NYC"
);

let pizza2 = new Pizza("Smaller Than a Pea", "THICC", "Chicago");
pizza1.pizzaSize = "THE MG SUN";
pizza1.price;
pizza1.addTopping([" Pepperoni"]);
pizza1.printDetails();

pizza2.addTopping([" Pepperoni", " More Cheese", " Onions"]);
pizza2.printDetails();
// pizza1 === pizza2 => false
