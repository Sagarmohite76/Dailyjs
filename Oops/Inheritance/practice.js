class Parent {
    default() {
        console.log("This is a parent class");
    }
}
class Child extends Parent {
    default2() {
        console.log("This is a child class");

    }
}
let c1 = new Child();
c1.default();
c1.default2();


class Information {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Information {
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }
}
let s1 = new Student("Sagar", 18, 45);
console.log(s1);
