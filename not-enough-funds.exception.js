class NotEnoughFundsException extends Error{
    constructor(){
        super("There are not enough funds in the sender's account");
    }
}

module.exports = {NotEnoughFundsException}