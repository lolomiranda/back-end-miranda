const User = require("./user");

class userService{
    constructor(){
        this.users = []; //Arrey para armazenar usuário 
        this.nextId = 1; //contador para gerar id
    }

    addUser(nome, email){
        const user = new User(this.nextId++, nome, email);
        this.users.push(user);
        return user;
    }

    getUsers(){
        return this.users
    }

}

module.exports = new userService;