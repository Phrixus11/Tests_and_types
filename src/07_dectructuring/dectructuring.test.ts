import {beforeEach, expect} from "vitest";
import {ManType} from "./Dectructuring";

let props: ManType
beforeEach(()=>{
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        address: {
            street: {
                title: 'nezavisimosti street'
            }
        }
    }
})

test('', () => {

    // const age = props.age
    // const lessons = props.lessons

    // const a = props.age
    // const l = props.lessons

    const {age, lessons} = props
    const {age: a, lessons: l} = props // даем другие названия переменным из объекта
    // вместо этого const {age, lessons, address: {street:{title}}} = props пишем ниже
    const {title} = props.address.street



    expect(age).toBe(32);
    expect(lessons.length).toBe(3);

    expect(a).toBe(32);
    expect(l.length).toBe(3);
    expect(title).toBe('nezavisimosti street');
})

test('', () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...rest] = props.lessons
    // const [, ls2, ls3] = props.lessons // только для второго элемента
    // const [,, ls3] = props.lessons // только для третьего элемента

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(rest.length).toBe(2)
    expect(rest[0].title).toBe("2")

    expect(rest[0]).toStrictEqual({title: "2"}) // проверка на наличие нужных ключей и свойств в объекте

})