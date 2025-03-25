

type UserType = {
    [key: string]: { id: string, name: string }
}

export const userArray = [
    {id: '10', name: 'Cristian'},
    {id: '20', name: 'david'},
    {id: '30', name: 'joe'},
    {id: '40', name: 'tom'},
    {id: '50', name: 'qwe'},
]

export const users: UserType = {
    '10': {id: '10', name: 'Cristian'},
    '20': {id: '20', name: 'david'},
    '30': {id: '30', name: 'joe'},
    '40': {id: '40', name: 'tom'},
    '50': {id: '50', name: 'qwe'},
    '60': {id: '60', name: 'op'},
    '70': {id: '70', name: 'name'},
    '80': {id: '80', name: 'guy'},
}

//add user
const user = {id: '90', name: 'Igor'};
users[user.id] = user
userArray.push(user); // возможны дубликаты
let userCopy = [...userArray, user]; // иммутабельно

// delete user
delete users['80']

userArray.filter(user => user.id !== '80');

// update
users[user.id].name = 'Vitya'