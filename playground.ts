// type aliases 
// type Data = string;
// interface Person {
//     name: Data,
//     age: number
// }
// interface PersonLoggerFn {
//     (name: string , age: number): string
// }
// descibe function types
// type PersonLoggerFn = (name: string , age: number) => string
// type Person ={
//     name: string,
//     age: number,
// }
// // classes
// class Person {
//     name: string ='';
//     age: number = 0;
//     constructor (name:string, age: number) {
//         this.name =name;
//         this.age =age ;
//     }

// }
// const playfunc = () => {
// const name ='Jon'
// const age = 45;
// const personObject: Person ={
//     name: 'Jon Martirosyan',
//     age: 33,
// }
//     const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number) => {
//         const info =`Name: ${personName}, age: ${personAge}`;
//         console.log(info);
        
//         return info

//     }
//     // implecit types 
//     const implicitFn = (name: string):string =>{
//         return name
//     }
//     implicitFn('Armena');
//     const logpersonInfo2 = (person: Person) => {
//         const info =`Name: ${person.name}, age: ${person.age}`;
//         console.log(info);
        
//         return info
//     }
//     const log = logPersonInfo(name, age);
//     const ko: string = logpersonInfo2(new Person('Jon', 45))
// }
// nerrowing
// const play = () => {
//     const names: string[] = ['Jon','Martirosyan'];
//     const nubers: Array<number> = [2,8,546];
//     const random = Math.random() >0.5?'Hello': [1, 2];
//     if (typeof random === 'string') {
//         const upper = random.toUpperCase();
//     } else {
//         console.log(random)
//     }
// console.log(random.length);

// }
interface Person {
    name: string
    age: number
}
type Car = {
    name: string
} 
type RaceCar = {
    speed: number
    maxSpeed: number
} & Car & { milage: number} ;

type CityCar  = {
    space : number,
    name: string
}
interface BusinessPerson extends Person {
    salary : number
}
interface AcademicPerson extends BusinessPerson {
 publications: string[]
}
const play = () => {
    const justPerson: Person = {
        name: 'Jon',
        age: 65,
    }
    const person : AcademicPerson = {
        name: 'Jon',
        age: 35,
        publications: ['2','54'],
        salary: 4500
    }
    const businessperson : BusinessPerson = {
        name: 'Jon',
        age: 40,
        salary: 450000000
    }
// console.log(justPerson);
// console.log(person);
// console.log(businessperson);
const car: Car ={
    name: 'Audi',
}
const raceCar: RaceCar ={
    speed: 540,
    name: 'Frord',
    milage: 15000
}
// union
const carFunc = (car: RaceCar | CityCar) {
    console.log(car)
}
console.log(car);
console.log(raceCar);

}
export default play;