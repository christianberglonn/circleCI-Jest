const functions = require("./functions");

describe('my beverage', () => {
    const myBeverage = {
        delicious: true,
        sour: false,
    };

    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});

describe('my empty list', () => {

    test('should return empty list', () => {
        expect(functions.emptyList()).toEqual([]);
    });
    test('length is zero', () => {
        expect(functions.emptyList()).toHaveLength(0);
    });
    test('not return empty string', () => {
        expect(functions.emptyList()).not.toBe("");
    });
});

describe('my total product cost', () => {

    test('should return 0 on empty list', () => {
        let products = [];
        expect(functions.totalProductCost(products)).toBe(0);
    });

    test('should return 15 on a list med ett föremål som kostar 15', () => {
        let products = [{
            name: "Lök",
            price: 15
        }];
        expect(functions.totalProductCost(products)).toBe(15);
    });

    test('should return 55 on a list med 3 föremål som kostar 10, 15, 30', () => {
        let products = [
            { name: "Banan", price: 10 },
            { name: "Lök", price: 15 },
            { name: "Mango", price: 30 }
        ];
        expect(functions.totalProductCost(products)).toBe(55);
    });
});



/*
describe('my add product', () => {
    test('should add a product correctly', () => {
        let products = [];
        let product = { name: "Christian", price: 15 };
        let updateProducts = [...products, product];
        expect(functions.addProduct(products.product)).toHaveLength(1);
        expect(functions.addProduct(products.product)).toHaveLength(1);

        // :((((


    });
});
 */