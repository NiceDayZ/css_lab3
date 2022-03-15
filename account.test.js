const { Account } = require("./account");
const { CurrencyService } = require("./currency.service");
const { NotEnoughFundsException } = require("./not-enough-funds.exception");

jest.mock('./currency.service.js')

describe("Testing account class", () => {
    test("it should transfer from one account to another", () =>{
        source = new Account(0, 'GBP');
        source.Deposit(100);

        destination = new Account(0, 'CAD');

        const mockCurrencyService = CurrencyService.mock.instances[0];
        const mockGetConvertionRate = mockCurrencyService.GetConversionRate;

        mockGetConvertionRate.mockReturnValueOnce(2.2);

        source.TransferFunds(destination, 100);

        expect(source.balance).toEqual(0);
        expect(destination.balance).toEqual(220);

        expect(mockGetConvertionRate).toHaveBeenCalledTimes(1);
        expect(mockGetConvertionRate).toHaveBeenCalledWith('GBP', 'CAD');
        
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
