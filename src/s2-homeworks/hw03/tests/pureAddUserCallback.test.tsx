import React from 'react'
import { v1 } from 'uuid'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: UserType[] = []
const setName = (users: UserType[]) => {
    initialState = users
}

beforeEach(() => {
    initialState = []
})


test('name 1', () => {
    const id = v1();
    pureAddUserCallback('name',id, setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
