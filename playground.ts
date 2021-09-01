

interface Person {
    name: string,
    age: number
}

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
    const logPersonInfo = (personName: string, personAge: number) => {
        const info =`Name: ${personName}, age: ${personAge}`;
        console.log(info);
        
        return info

    };
    const logpersonInfo2 = (person: Person) => {
        const info =`Name: ${person.name}, age: ${person.age}`;
        console.log(info);
        
        return info
    }
    logPersonInfo(name, age);
    logpersonInfo2(personObject)
}
export default playfunc;