import {expect} from "chai";
class Calculator {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    };

    operationSum() {
            return this.num1 + this.num2
    }

    operationMultiply() {
            return this.num1 * this.num2
    }

    operationDividing() {
            return this.num1 / this.num2
    }

    operationSubtraction() {
            return this.num1 - this.num2
    }
    operationSumMultiply() {
            return (this.num1 + this.num2) * (this.num1 + this.num2)
    }
}

describe ("Positive Tests", () => {
    afterEach(() => {
        console.log("Test Done");
    });

    it ("Check Sum Positive 1", ()=> {
        let summaryPositive1 = new Calculator(2, 1).operationSum();
        expect(summaryPositive1, "Your summ equal to 3").to.equal(3);
    });

    it ("Check Sum Positive 2", ()=> {
        let summaryPositive2 = new Calculator(5, 5).operationSum();
        expect(summaryPositive2, "Your summ equal to 10").to.equal(10);
    });

    it ("Check Multiply Positive 1", ()=> {
        let multiplyPositive1 = new Calculator(6, 6).operationMultiply();
        expect(multiplyPositive1, "Your Multiply equal to 36").to.equal(36);
    });

    it ("Check Multiply Positive 2", ()=> {
        let multiplyPositive2 = new Calculator(8, 8).operationMultiply();
        expect(multiplyPositive2, "Your Multiply equal to 64").to.equal(64);
    });

    it ("Check Dividing Positive 1", ()=> {
        let dividingPositive1 = new Calculator(21, 7).operationDividing();
        expect(dividingPositive1, "Your Dividing equal to 3").to.equal(3);
    });

    it ("Check Dividing Positive 2", ()=> {
        let dividingPositive2 = new Calculator(44, 11).operationDividing();
        expect(dividingPositive2, "Your Dividing equal to 4").to.equal(4);
    });

    it ("Check Subtraction Positive 1", ()=> {
        let subtractionPositive1 = new Calculator(100, 50).operationSubtraction();
        expect(subtractionPositive1, "Your Dividing equal to 50").to.equal(50);
    });

    it ("Check Subtraction Positive 2", ()=> {
        let subtractionPositive2 = new Calculator(100, 70).operationSubtraction();
        expect(subtractionPositive2, "Your Dividing equal to 30").to.equal(30);
    });

    it ("Check sumMultiply Positive 1", ()=> {
        let sumMultiplyPositive1 = new Calculator(10, 20).operationSumMultiply();
        expect(sumMultiplyPositive1, "Your Dividing equal to 900").to.equal(900);
    });

    it ("Check sumMultiply Positive 2", ()=> {
        let sumMultiplyPositive2 = new Calculator(5, 10).operationSumMultiply();
        expect(sumMultiplyPositive2, "Your Dividing equal to 225").to.equal(225);
    });
});


describe ("Negative Tests", () => {
    afterEach(() => {
        console.log("Test Done");
    });

    it ("Check Sum Negative 1", ()=> {
        let summaryNegative1 = new Calculator(20, 10).operationSum();
        expect(summaryNegative1, "Your summ equal to 30").to.equal(40);
    });

    it ("Check Sum Negative 2", ()=> {
        let summaryNegative2 = new Calculator(50, 50).operationSum();
        expect(summaryNegative2, "Your summ equal to 100").to.equal(30);
    });

    it ("Check Multiply Negative 1", ()=> {
        let multiplyNegative1 = new Calculator(6, 6).operationMultiply();
        expect(multiplyNegative1, "Your Multiply equal to 36").to.equal(26);
    });

    it ("Check Multiply Negative 2", ()=> {
        let multiplyNegative2 = new Calculator(8, 8).operationMultiply();
        expect(multiplyNegative2, "Your Multiply equal to 64").to.equal(56);
    });

    it ("Check Dividing Negative 1", ()=> {
        let dividingNegative1 = new Calculator(21, 7).operationDividing();
        expect(dividingNegative1, "Your Dividing equal to 3").to.equal(5);
    });

    it ("Check Dividing Negative 2", ()=> {
        let dividingNegative2 = new Calculator(44, 11).operationDividing();
        expect(dividingNegative2, "Your Dividing equal to 4").to.equal(6);
    });

    it ("Check Subtraction Negative 1", ()=> {
        let subtractionNegative1 = new Calculator(100, 50).operationSubtraction();
        expect(subtractionNegative1, "Your Dividing equal to 50").to.equal(40);
    });

    it ("Check Subtraction Negative 2", ()=> {
        let subtractionNegative2 = new Calculator(100, 70).operationSubtraction();
        expect(subtractionNegative2, "Your Dividing equal to 30").to.equal(50);
    });

    it ("Check sumMultiply Negative 1", ()=> {
        let sumMultiplyNegative1 = new Calculator(10, 20).operationSumMultiply();
        expect(sumMultiplyNegative1, "Your Dividing equal to 900").to.equal(800);
    });

    it ("Check sumMultiply Negative 2", ()=> {
        let sumMultiplyNegative2 = new Calculator(5, 10).operationSumMultiply();
        expect(sumMultiplyNegative2, "Your Dividing equal to 225").to.equal(205);
    });
});

