import {beforeEach, expect} from "vitest";
import {ManType} from "./Dectructuring";

let props: ManType
beforeEach(()=>{
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
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
    expect(lessons.length).toBe(2);

    expect(a).toBe(32);
    expect(l.length).toBe(2);
    expect(title).toBe('nezavisimosti street');
})

test('', () => {


})