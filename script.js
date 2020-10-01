function Cart() {

    const basket = [];

    this.addItem = function (itemName, quantity, price) {
        const newItem = {
            "itemName": itemName,
            "quantity": quantity,
            "price": price
        }

        if (basket.length > 0) {

            const checkItems = (element) => {
                return element.itemName === itemName;
            };

            const itemRepeated = basket.some(checkItems);
            if (itemRepeated) {
                return console.log("This item has been added previously, try updating your cart.");
            } else {
                basket.push(newItem);
                return console.log(basket);
            }
        }

        else {
            basket.push(newItem);
            return console.log(basket);
        }
    };

}

const item = new Cart();
item.addItem("mango", 5, 200);
item.addItem("goman", 5, 200);
item.addItem("mango", 5, 200);
item.addItem("goman", 5, 200);
item.addItem("beans", 5, 200);
item.addItem("seand", 5, 200);
item.addItem("beans", 5, 200);

/*
Cart.prototype.total = function () {
    return this.quantity * this.price;
} */