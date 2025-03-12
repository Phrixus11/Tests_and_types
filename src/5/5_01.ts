export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs = people.map(dimychTransformator)
const devs4 = people.map(man => ({
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-incubator`)

console.log(messages)

export const createGreetingMessage = (people:ManType[]) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-incubator`)
}