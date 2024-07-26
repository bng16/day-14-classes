class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `hello my name is ${this.name} and my age is ${this.age}`;
    }
    newAge(age){
        this.age = age;
    }
}

const bng=new person("Biswajit",22);
console.log(bng.greeting());

bng.newAge(23);
console.log(bng.greeting());
