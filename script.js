function Cart() {

    const basket = [];

    this.addItem = function (itemName, quantity, price) {
        let newItem = {
            "itemName": itemName,
            "quantity": quantity,
            "price": price
        }

        if (basket.length > 0) {

            basket.forEach(function (element) {
                if (itemName == element.itemName) {
                    return console.log("operation cannot happen")
                } else {
                    basket.push(newItem);
                    return console.log(basket);
                }
            })
        }

        else {
            basket.push(newItem);
            console.log(basket);
        }
    };

}

const item = new Cart();
item.addItem("mango", 5, 200);
item.addItem("mango", 50, 70);
item.addItem("beans", 50, 70);

/*
Cart.prototype.total = function () {
    return this.quantity * this.price;
}
console.log(firstItem.total());
console.log(Cart)
console.log(.addItem("mango", 5, 200)); */