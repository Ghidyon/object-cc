//Uncomment and test object constructor

/*
function Cart() {

    const basket = [];
    
    this.getBasket = () => {
        return basket;
    }
    
    this.addItem = (itemName, quantity, price) => {
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
                return "This item has been added previously, try updating your cart.";
            }
            else {
                return basket.push(newItem);
            }
        }


        // Conditions to check if item is already in the basket
        if (basket.length > 0) {return addsItem()}
        else {
            return basket.push(newItem);
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
                }
                else if (parameter === 'price') {
                    itemFound.price = value;
                } 
            }
        }

        // Conditions to check item to be updated
        if (basket.length > 0) {
            return basket.forEach(updatesItem);
        }
        else {
            return "Cart is empty!";
        }
    }

    this.removeItem = (itemName, quantity) => {

        // Function to remove an item
        const removesItem = (element) => {
            if (element.itemName === itemName) {
                const indexValue = basket.indexOf(element);
                const itemFound = basket[indexValue];

                if (quantity === itemFound.quantity) {
                    return basket.splice(indexValue, 1);
                }
                else if (quantity < itemFound.quantity) {
                    const newQuantity = itemFound.quantity - quantity;
                    return itemFound.quantity = newQuantity;
                }
                else {
                    return "Error! Quantity of items exceeded.";
                }
            }
        }

        // Conditions to check item to be removed
        if (basket.length > 0) {
            return basket.forEach(removesItem);
        }
        else {
            return 'Cart is empty!';
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
        if (this.getBasket().length > 0) {
            this.getBasket().forEach(getTotal);
            return sumOfItems;
        }
        else {
            return "Cart is empty!";
        }
    }
}


function Shop() {
  
    Cart.call(this);
    
    this.checkout = (cash) => {
      
        if (this.total() > 0) {
            
            if (cash >= this.total()) {
              return (cash - this.total());
            }
            else {
              return false;
            }
             
        }
        else {
            return 'Cart is empty.';
        }
    }
}

const myShop = new Shop();
myShop.addItem("mango", 5, 200);
myShop.addItem("tomato", 5, 200);
console.log(myShop.addItem("mango", 5, 200));
console.log(myShop.addItem("cashew", 5, 200));
console.log(myShop.addItem("beans", 5, 200));
console.log(myShop.addItem("banana", 5, 200));
console.log(myShop.updateItem("beans", 'price', 500));
console.log(myShop.removeItem("beans", 9));
console.log(myShop.removeItem("mango", 3));
console.log(myShop.total());
console.log(myShop.checkout(7000));
*/


//Uncomment and test obj class
/*
class Cart {
    constructor() {
        this.basket = [];
    }
    
    addItem (itemName, quantity, price) {
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
            const itemRepeated = this.basket.some(checkItems);

            if (itemRepeated) {
                return "This item has been added previously, try updating your cart.";
            }
            else {
                this.basket.push(newItem);
            }
        }


        // Conditions to check if item is already in the basket
        if (this.basket.length > 0) {addsItem()}
        else {
            this.basket.push(newItem);
        }
    };
    
    updateItem(itemName, parameter, value) {

        // Function to update an existing item
        const updatesItem = (element) => {
            if (itemName === element.itemName) {
                let indexValue = this.basket.indexOf(element);
                let itemFound = this.basket[indexValue];

                if (parameter === 'quantity') {
                    itemFound.quantity = value;
                }
                else if (parameter === 'price') {
                    itemFound.price = value;
                } 
            }
        }

        // Conditions to check item to be updated
        if (this.basket.length > 0) {
            return this.basket.forEach(updatesItem);
        }
        else {
            return "Cart is empty!";
        }
    }

    removeItem(itemName, quantity) {

        // Function to remove an item
        const removesItem = (element) => {
            if (element.itemName === itemName) {
                const indexValue = this.basket.indexOf(element);
                const itemFound = this.basket[indexValue];

                if (quantity === itemFound.quantity) {
                    return this.basket.splice(indexValue, 1);
                }
                else if (quantity < itemFound.quantity) {
                    const newQuantity = itemFound.quantity - quantity;
                    return itemFound.quantity = newQuantity;
                }
                else {
                    return "Error! Quantity of items exceeded.";
                }
            }
        }

        // Conditions to check item to be removed
        if (this.basket.length > 0) {
            return this.basket.forEach(removesItem);
        }
        else {
            return 'Cart is empty!';
        }
    }

    total() {
        let sumOfItems = 0;

        // Function to get total of all items
        const getTotal = (element) => {
            const itemTotal = element.price * element.quantity;
            sumOfItems += itemTotal;
        }

        // Conditions to check total number of items
        if (this.basket.length > 0) {
            this.basket.forEach(getTotal);
            return sumOfItems;
        }
        else {
            return "Cart is empty!";
        }
    }
}

class Shop extends Cart{
    constructor() {
      super();
    }
    
    checkout(cash) {
        if (this.total() > 0) {
            
            if (cash >= this.total()) {
              return (cash - this.total());
            }
            else {
              return false;
            }
             
        }
        else {
            return 'Cart is empty.';
        }
    }
}

myShop = new Shop();
console.log(myShop.addItem("mango", 5, 200));
console.log(myShop.addItem('pear', 4, 500));
console.log(myShop.updateItem('pear', 'quantity', 22))
console.log(myShop.removeItem("pear", 2));
console.log(myShop.total());
console.log(myShop.checkout(6000));
*/