// type aliases 
type Data = string;
interface Person {
    name: Data,
    age: number
}
// interface PersonLoggerFn {
//     (name: string , age: number): string
// }
// descibe function types
type PersonLoggerFn = (name: string , age: number) => string
// type Person ={
//     name: string,
//     age: number,
// }
const playfunc = () => {
const name ='Jon'
const age = 45;
const personObject: Person ={
    name: 'Jon Martirosyan',
    age: 33,
}
    const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number) => {
        const info =`Name: ${personName}, age: ${personAge}`;
        console.log(info);
        
        return info

    }
    // implecit types 
    const implicitFn = (name: string):string =>{
        return name
    }
    implicitFn('Armena');
    const logpersonInfo2 = (person: Person) => {
        const info =`Name: ${person.name}, age: ${person.age}`;
        console.log(info);
        
        return info
    }
    const log = logPersonInfo(name, age);
    const ko: string = logpersonInfo2(personObject)
}
export default playfunc;