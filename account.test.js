const { Account } = require("./account");
const { NotEnoughFundsException } = require("./not-enough-funds.exception");

describe("Testing account class", () => {
    test("it should transfer from one account to another", () =>{
        source = new Account();
        source.Deposit(200);

        destination = new Account();
        destination.Deposit(150);

        source.TransferFunds(destination, 100);

        expect(source.balance).toEqual(100);
        expect(destination.balance).toEqual(250);
        
    })

    test("it should throw error if there are not enough funds", () =>{
        source = new Account();
        source.Deposit(200);

        destination = new Account();
        destination.Deposit(100);

        expect(() => {source.TransferFunds(destination, 300)}).toThrowError(
            new NotEnoughFundsException()
        );
        
    })
})
