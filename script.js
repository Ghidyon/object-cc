function Cart() {

    const basket = [];

    this.addItem = function (itemName, quantity, price) {

        // Object literal for new item
        const newItem = {
            "itemName": itemName,
            "quantity": quantity,
            "price": price
        }

        // Conditions to check if item is already in the basket
        if (basket.length > 0) {

            const checkItems = (element) => {
                return element.itemName === itemName;
            };

            const itemRepeated = basket.some(checkItems);

            if (itemRepeated) {
                return console.log("This item has been added previously, try updating your cart.");
            }

            else {
                basket.push(newItem);
                return console.log(basket);
            }
        }

        else {
            basket.push(newItem);
            return console.log(basket);
        }
    };
    
    this.updateItem = (itemName, parameter, value) => {
      if (basket.length > 0) {
        basket.forEach((element) => {
          if (element.itemName == itemName) {
              let indexValue = basket.indexOf(element);
              let found = basket[indexValue];
              if (parameter == 'quantity') {
                  found.quantity = value;
                  return console.log(found);
              } else if (parameter == 'price') {
                  found.price = value;
                  return console.log(found);
              } else {
                  return console.log(`Parameter doesn't exist`);
              }
          }
          
          else {
            return console.log(`Item is not in the cart`);
          }
        })
      }
      
      else {
        return console.log(`There is no single item in the cart`);
      }
    }

}

const item = new Cart();
item.addItem("mango", 5, 200);
item.addItem("goman", 5, 200);
item.addItem("mango", 5, 200);
item.addItem("goman", 5, 200);
item.addItem("beans", 5, 200);
item.addItem("seand", 5, 200);
item.updateItem("beans", 'price', 500);

/*
Cart.prototype.total = function () {
    return this.quantity * this.price;
} */