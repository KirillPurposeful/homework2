import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}
type SetErrorPropsType =(a: string)=>void
export const pureAddUser = (name: string, setError: SetErrorPropsType, setName:  (a: string)=>void, addUserCallback: (name: string) => void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!');
    } else {
        addUserCallback(name);
        setName('');
    }
}

export const pureOnBlur = (name: string, setError: SetErrorPropsType,) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!');
    }
}

export const pureOnEnter = (e: React.KeyboardEvent, addUser: () =>void  ) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)



        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: React.KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length; // Количество пользователей
    const lastUserName = users.length > 0 ? users[users.length - 1].name : '';

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
