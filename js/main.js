// 1. Створити сутність "Людина".
//    - Властивості:
//       - імʼя;
//       - вік.
//    - Методи:
//      - конструктор, який приймає два параметри: імʼя та вік;
//      - метод, який виводить у консоль інформацію про людину.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`Name - ${this.name};\nAge - ${this.age};`);
    }
}

// 2. Створити сутність "Автомобіль".
//    - Властивості:
//      - марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
//      - власник.
//    - Методи:
//      - конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
//      - присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
//      - метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
class Car {
    _owner;

    constructor(carBrand, model, year, licensePlate) {
        this.carBrand = carBrand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
    }
    set owner(person) {
        if (person.age < 18) console.log(`${person.name} is so young!`);
        else this._owner = person;
    }
}

// В якості демонстраціїї створити:
// - декілька екземплярів класу Людина;
// - декілька екземплярів класу Автомобіль;
// - присвоїти власників автомобілям.
const person1 = new Person('Alice', 17);
const person2 = new Person('Mery', 45);
const person3 = new Person('Alex', 26);

const car1 = new Car('Mitsubishi', 'Lancer', 2013, 'BB 8345 IM');
const car2 = new Car('Ford', 'Escape', 2018, 'AA 4356 TK');
const car3 = new Car('Volkswagen', 'Passat', 2015, 'AP 1234 AA');

car1.owner = person1;
car2.owner = person2;
car3.owner = person3;

console.log('car1:', car1);
console.log('car2:', car2);
console.log('car3:', car3);
