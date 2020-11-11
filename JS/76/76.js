(function () {
    /*global $ */
    'use strict';

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.quantity = quantity;
            this.price = (Math.round((price / this.quantity) * 100) / 100).toFixed(2);
        }
    }

    class Order {
        constructor(customerName, customerAddress, items) {
            this.customerName = customerName;
            this.customerAddress = customerAddress;
            this.items = items;
        }

        get total() {
            return this.total;
        }
    }

    fetch('76.json')

        .then(r => r.json())
        .then(orders => {
            console.log(orders);
            const mydiv = $("#orderDiv");
            orders.forEach(order => {
                mydiv.append(`${Order},${Item}`);
            });
        })

        .catch(err => console.error(err));
}());