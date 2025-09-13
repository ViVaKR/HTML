
class Account {
    constructor() {
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }
}

export default Account;
