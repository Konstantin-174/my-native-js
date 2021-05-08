import {messagesCreator, PeopleType} from './05';

let people: Array<PeopleType> = []

beforeEach( () => {
    people = [
        {name: "Vasya Ivanov", age: 23},
        {name: "Petya Petrov", age: 45},
        {name: "Misha Sidorov", age: 32},
        {name: "Ilya Kuznecov", age: 19}
    ]
})

test("Should get array with messages", () => {

    const messages = messagesCreator(people)

    expect(messages.length).toBe(4)
    expect(messages[0]).toBe("Hello Vasya! Welcome to new life!")
    expect(messages[1]).toBe("Hello Petya! Welcome to new life!")
    expect(messages[2]).toBe("Hello Misha! Welcome to new life!")
    expect(messages[3]).toBe("Hello Ilya! Welcome to new life!")
})