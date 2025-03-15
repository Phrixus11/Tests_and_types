import * as React from "react";
import {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}> // одна из возможныз записей
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimichState(m: string) {
    return [m, function () {}]
}

// function useDimichState(m: string) {
//     return {message: m, setMessage: function () {}}
// }

export const ManComponent:React.FC<PropsType> = ({title, man: {name}, ...props}) => {
    //const {title, man: {name}} = props // удобная запись, если нужно сохранить пропс в параметрах, но можно использовать rest
const [message, setMessage] = useDimichState('hello')

return <div>
    <h1>{title}</h1>
    <hr/>
    <div>
        {props.car.model}
    </div>
</div>
 }


