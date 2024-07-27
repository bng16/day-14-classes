// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greeting(){
//         return `hello my name is ${this.name} and my age is ${this.age}`;
//     }
//     newAge(age){
//         this.age = age;
//     }
//     static randomId(){
//         return Math.floor(Math.random()*100)
//     }
// }

// const bng=new person("Biswajit",22);
// console.log(bng.greeting());
// console.log(bng.randomId())

// bng.newAge(23);
// console.log(bng.greeting());



// class student extends person{
//     constructor(name,age,studentId){
//         super(name,age);
//         this.studentId = studentId;
//     }

//     greeting(){
//         return `hello my name is ${this.name} and my id is ${this.studentId}`;
//     }

// }

// const student2 = new student('biswajit',22,'20IUT0010031');
// console.log(student2.greeting());



class student{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        student.addCount();
    }

    static addCount(){
        student.stdCount += 1;
    }
    static studentCount(){
        return student.stdCount;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
}
student.stdCount=0;
const bng=new student("Biswajit","Nag","22");
const sng=new student("Sayanjit","Nag","19");
console.log(student.studentCount());
console.log(bng.fullName);
