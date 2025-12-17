
let bike = {
    name: "Kawasaki z900",
    price: "12,00,000",
    version: [1, 2, [3, 4, 5, [6, 7, [8, 9], 10]]],
    models: {
        version1: "kawasaki z800",
        about: {
            calculate: function (a, b) {
                return a + b;
            },
            cal: function (a, b) {
                return a * b;
            },
            subabout: {
                subtraction: function (a, b) {
                    return a - b;
                },
            }
        },
    },
};
console.log(bike);
console.log(bike.version[2][3][3]);
console.log(bike.models);
console.log(bike.models.about.calculate(5, 7));
console.log(bike.models.about.subabout.subtraction(4, 2));
console.log(bike["models"]["version1"]);
console.log({name:bike.name});

for(let key in bike){
    if(key =="name"){
        console.log(`${key}:${bike.name}`)
    }
}


// 1.

let person = {
    name: "Alice",
    age: 25
};

let car = {
    brand: "Toyota",
    year: 2022,
    start() {
        console.log("Car started");
    }
};


let student = {
    name: "John",
    grades: {
        math: 90,
        science: 85
    }
};


let company = {
    name: "TechCorp",
    employees: ["Alice", "Bob", "Charlie"]
};


let account = {
    username: "user123",
    isActive: true
};


let animal = {
    type: "Unknown"
};
let dog = Object.create(animal);
dog.breed = "Labrador";
console.log(dog);


let key = "email";
let user = {
    name: "Sagar",
    [key]: "sagar@example.com"
};


let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};


let event = {
    name: "Conference",
    date: new Date()
};
