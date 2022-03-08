const { NotEnoughFundsException } = require("./not-enough-funds.exception");

 class Account
  {
    constructor(amount=0){
        this.balance = amount
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
          destination.Deposit(amount);
          this.Withdraw(amount);
        }
    }
}

module.exports = {Account}
