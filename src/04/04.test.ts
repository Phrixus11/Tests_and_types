import {expect} from "vitest";


test('should take old men older then 90', () => {
    const ages = [10,20,22,1,100,90,14]

    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})


test('should take courses chipper 160', () => {
    const courses = [
        {title:'CSS', price: 110},
        {title:'JS', price: 200},
        {title:'REACT', price: 150},
    ]


    const cheapCoureses = courses.filter(c=> c.price < 160)

    expect(cheapCoureses.length).toBe(2)
    expect(cheapCoureses[0].title).toBe('CSS')
    expect(cheapCoureses[1].title).toBe('REACT')
})

test('get only completed task', () => {
    const tasks = [
        {id: 1, title: 'Bred', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},

    ]

    const completedTasks = tasks.filter(task=> task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test('get only uncompleted task', () => {
    const tasks = [
        {id: 1, title: 'Bred', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},

    ]

    const uncompletedTasks = tasks.filter(task=> !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})
