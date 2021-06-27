import {user, UserType} from './09';

function increaseAge (u: UserType) {
    u.age++
}

test ('Mutable object test', () => {
    increaseAge(user)

    expect(user.age).toBe(31)

    let superman = user

    superman.age = 1000

    expect(superman.age).toBe(1000)
})

test ('Mutable array test', () => {
    let men = [
        {name: 'Lukas', age: 45},
        {name: 'Ivanka', age: 30}
    ]

    let gangsters = men
    gangsters.push({name: 'Petro', age: 15})

    expect(men[2]).toEqual({name: 'Petro', age: 15})
})

test ('Reference type test', () => {
    const address = {
        title: 'Tampa'
    }

    let user1 = {
        name: 'Petro',
        age: 30,
        address: address
    }

    let user2 = {
        name: 'Gulnaz',
        age: 32,
        address: address
    }

    address.title = 'San Jose'

    expect(user1.address.title).toBe('San Jose')
    expect(user2.address.title).toBe('San Jose')
})

test ('Reference type array test', () => {
    const address = {
        title: 'Tampa'
    }

    let user1 = {
        name: 'Petro',
        age: 30,
        address: address
    }

    let user2 = {
        name: 'Kolyan',
        age: 32,
        address: address
    }

    address.title = 'San Jose'

    let users = [user1, user2, {name: 'Sergo', age: 14, address: address}]
    let coworkers = [user1, user2]

    coworkers[0].name = 'Petr'

    expect(user1.name).toBe('Petr')
    expect(users[0].name).toBe('Petr')
})

test ('Testing .sort()', () => {
    let arr = ['d', 'c', 'b', 'a']

    toSort(arr)

    expect(arr).toEqual(['a', 'b', 'c', 'd'])
})

function toSort (array: any) {
    array.sort()
}