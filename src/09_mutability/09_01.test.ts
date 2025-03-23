import {expect} from "vitest";

function increaseAge(u:UserType) {
    u.age = u.age + 1;
}

type UserType = {
    age: number
    name: string
    address: {title:string};
}

test('reference type test', ()=>{

    let user: UserType =
    {age: 32, name: "John", address: {title: 'Minsk'}}

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)


})

test('array reference test', ()=>{

    let users: UserType[] = [
        {age: 32, name: "John", address: {title: 'Minsk'}},
        {age: 32, name: "John", address: {title: 'Minsk'}},
]
    const admins = users

    admins.push({age: 10, name: "Bob", address: {title: 'Minsk'}})

    expect(users[2]).toEqual({age: 10, name: "Bob"})


})

test('value type test', ()=>{
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100)


})
