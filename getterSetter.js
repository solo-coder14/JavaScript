class User{
    name;
    getter(){
        return this.name
    }
    setter(name){
        this.name = name
    }
};

let user = new User();
// user.setter("John");
user.name = "John";
console.log( user.getter());