type UsersType = {
    [key: string]: {id: number, name: string}
}

const usersObj: UsersType = {
    '234': {id: 234, name: "Kesha"},
    '434': {id: 434, name: "Sveta"},
    '23': {id: 23, name: "Ira"},
    '1': {id: 1, name: "Dasha"}
}

let user = {id: 45, name: "Egor"}
usersObj[user.id] = user
delete usersObj[user.id]
usersObj[user.id].name = "Zhorik"

export const usersArray = [
    {id: 12, name: "Petya"},
    {id: 23, name: "Alex"},
    {id: 43, name: "Jim"},
    {id: 1, name: "Bim"},
]

//let usersArrayCopy = [...usersArray.filter(u => u.id === 45), user]
//usersArray.find(u => u.id === 1)
//let usersArray = usersArray.filter(u => u.id !== user.id)