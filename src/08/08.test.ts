export type UsersType = {
    [key: string]: {id: number, name: string}
}

let usersObj: UsersType

beforeEach(() => {
    usersObj = {
        '234': {id: 234, name: "Kesha"},
        '434': {id: 434, name: "Sveta"},
        '23': {id: 23, name: "Ira"},
        '1': {id: 1, name: "Dasha"}
    }
})

test ("Should update corresponding user", () => {
    usersObj['1'].name = "Tanya"

    expect(usersObj['1']).toEqual({id: 1, name: "Tanya"})
})

test ("Should delete corresponding user", () => {
    delete usersObj['1']

    expect(usersObj['1']).toBeUndefined()
})