export type PeopleType = {
    name: string
    age: number
}

const people: Array<PeopleType> = [
    {name: "Vasya Ivanov", age: 23},
    {name: "Petya Petrov", age: 45},
    {name: "Misha Sidorov", age: 32},
    {name: "Ilya Kuznecov", age: 19}
]



const dev = people.map( (man:PeopleType) => ({
    stack: ["HTML", "CSS", "JS", "React"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

export const messagesCreator = (people: Array<PeopleType>) =>{
    return people.map( man => `Hello ${man.name.split(" ")[0]}! Welcome to new life!`)
}