const someOrder = {
  items: [
    {name: "Dragon Food", price: 8, quantity: 8},
    {name: "Dragon", price: 800, quantity: 2},
    {name: "Shipping", price: 40, shipping: true}
  ]

};
//// seems to take start price as first argument as prev, current is the current iteration, and 0 sets prev
// then it goes prev price + cur.price (cur here being the current index in the array the .price just gets us deeper in the object at the index)
const oderTotal = order => {
  const totalItems = order.items.filter(x => !x.shipping).reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);
  const shippingItem = order.items.find(x => !!x.shipping);
  const shipping = totalItems > 1000 ? 0 : shippingItem.price;
  return totalItems + shipping
}
result = oderTotal(someOrder);
console.log(result);