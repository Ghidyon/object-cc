function Cart() {

    const basket = [];

    this.addItem = function (itemName, quantity, price) {

        // Object literal for new item
        const newItem = {
            "itemName": itemName,
            "quantity": quantity,
            "price": price
        }
        // Function to check if item to be added is already in the cart
        const checkItems = (element) => {
            return element.itemName === itemName;
        }
        // Function to add an item
        const addsItem = () => {
            const itemRepeated = basket.some(checkItems);

            if (itemRepeated) {
                return console.log("This item has been added previously, try updating your cart.");
            }
            else {
                basket.push(newItem);
                return console.log(basket);
            }
        }



        // Conditions to check if item is already in the basket
        if (basket.length > 0) {
            addsItem();
        }

        else {
            basket.push(newItem);
            return console.log(basket);
        }
    };

    this.updateItem = (itemName, parameter, value) => {

        // Function to update an existing item
        const updatesItem = (element) => {
            if (itemName === element.itemName) {
                let indexValue = basket.indexOf(element);
                let itemFound = basket[indexValue];

                if (parameter === 'quantity') {
                    itemFound.quantity = value;
                    return console.log(itemFound);
                }
                else if (parameter === 'price') {
                    itemFound.price = value;
                    return console.log(itemFound);
                }
                else {
                    return console.log(`Parameter doesn't exist`);
                }
            }
        }

        // Conditions to check item to be updated
        if (basket.length > 0) {
            basket.forEach(updatesItem)
        }
        else {
            return console.log(`Cart is empty!`);
        }
    }

    this.removeItem = (itemName, quantity) => {

        // Function to remove an item
        const removesItem = (element) => {
            if (element.itemName === itemName) {
                const indexValue = basket.indexOf(element);
                const itemFound = basket[indexValue];

                if (quantity === itemFound.quantity) {
                    basket.splice(indexValue, 1);
                    return console.log(basket);
                }
                else if (quantity < itemFound.quantity) {
                    const newQuantity = itemFound.quantity - quantity;
                    itemFound.quantity = newQuantity;
                    return console.log(basket);
                }
                else {
                    return console.log(`Error! Quantity of items exceeded.`);
                }
            }
        }

        // Conditions to check item to be removed
        if (basket.length > 0) {
            basket.forEach(removesItem);
        }
        else {
            return console.log('Cart is empty!');
        }
    }

    this.total = () => {
        let sumOfItems = 0;

        // Function to get total of all items
        const getTotal = (element) => {
            const itemTotal = element.price * element.quantity;
            sumOfItems += itemTotal;
        }

        // Conditions to check total number of items
        if (basket.length > 0) {
            basket.forEach(getTotal);
            return console.log(sumOfItems);
        }
        else {
            return console.log("Cart is empty!")
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
item.updateItem("beans", 'price', 200);
item.removeItem("beans", 9);
item.removeItem("mango", 3);
item.total();

/*
Cart.prototype.total = function () {
    return this.quantity * this.price;
} */