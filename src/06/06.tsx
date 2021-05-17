import React, {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }

    const nameChanged = () => {
        console.log('Name changed!')
    }

    const focusLostHandler = () => {
        console.log('Focus lost!')
    }

    return (
        <div>
            <textarea onChange={nameChanged} onBlur={focusLostHandler}>Vasya</textarea>
            <input type="number" onChange={onAgeChanged}/>
            <button tabIndex={0} onClick={deleteUser} name="DEL">x</button>
            <button onClick={deleteUser} name="ADD">x</button>
        </div>
    )
}