const { CurrencyService } = require("./currency.service");
const { NotEnoughFundsException } = require("./not-enough-funds.exception");

 class Account
  {
    constructor(amount=0, currency='EUR'){
        this.balance = amount
        this.currency = currency
        this.currencyService = new CurrencyService();
    }

    Deposit(amount)
    {
      this.balance += amount;
    }

    Withdraw(amount)
    {
      this.balance -= amount;
    }

    TransferFunds(destination, amount)
    {
        if(this.balance < amount){
          throw new NotEnoughFundsException()
        }else{
          this.Withdraw(amount);

          const convertionRate = this.currencyService.GetConversionRate(this.currency, destination.currency)
          const convertedAmount = parseFloat((amount * convertionRate).toFixed(12));

          destination.Deposit(convertedAmount);
        }
    }
}

module.exports = {Account}
