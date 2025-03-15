import * as React from "react"
import {ChangeEvent, MouseEvent} from "react";


// const callback = () => {
//     alert("hey")
//     return 12
// }

// window.setTimeout(callback, 1000)


export const User = () => {

    const [text, setText] = React.useState("hey")

    // const deleteUser = (event: MouseEvent<HTMLButtonElement> ) => {
    //     event.currentTarget.name
    //     alert(event.currentTarget.name)
    // }
    // const saveUser = () => {
    //     alert("save")
    // }

    let myInput: EventTarget & HTMLInputElement

    const search = () => {
        if(myInput) {
            console.log(myInput.value)
            myInput.value = ""
        } else {
            console.log('')
        }

    }

    const onNameChanged = (e) => setText(e.target.value)

    const onAgeChanged = (e:ChangeEvent<HTMLInputElement> ) => {

        myInput = e.currentTarget
        console.log("age changed " + myInput.value)

    }

    const focusLostHandler = () => {
        console.log("focusLostHandler")
    }

    return (
        <div>
            <h1>{text}</h1>
            <textarea onChange={onNameChanged}
            onBlur={focusLostHandler}></textarea>
            <input type="text" onChange={onAgeChanged}/>
            <button name='delete' onClick={search}>search</button>
            {/*<button name='delete' onClick={deleteUser}>delete</button>*/}
            {/*<button name='save' onClick={deleteUser}>save</button>*/}
        </div>
    )
}