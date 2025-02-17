class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // methods 
    writeFullName(){
        console.log(`my first name is ${this.firstName} and last name is ${this.lastName}`);
    }
}

let Student1 = new Student("akku", "prjpt");
console.log(Student1);

Student1.writeFullName;
console.log(Student1.writeFullName());