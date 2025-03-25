import {beforeEach, expect} from "vitest";

type UserType = {
    [key: string]: { id: string, name: string }
}

let users: UserType

beforeEach(()=>{
    users = {
        '10': {id: '10', name: 'Cristian'},
        '20': {id: '20', name: 'david'},
        '30': {id: '30', name: 'joe'},
        '40': {id: '40', name: 'tom'},
        '50': {id: '50', name: 'qwe'},
        '60': {id: '60', name: 'op'},
        '70': {id: '70', name: 'name'},
        '80': {id: '80', name: 'guy'},
    }
})

test('should update corresponding user',()=>{
    users['10'].name = 'Ekaterina'

    expect(users['10'].name).toBe('Ekaterina')
    expect(users['10']).toEqual({id: '10', name: 'Ekaterina'})
})


test('should delete corresponding user',()=>{
    delete users['10']

    expect(users['10']).toBeUndefined()

})