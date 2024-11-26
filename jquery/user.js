class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

export default User;
