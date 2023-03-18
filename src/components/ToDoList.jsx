import React from 'react'
import { List } from 'semantic-ui-react'

import { ToDo } from './ToDo'

const toDos = [
    {title: 'Wake Up', status: true},
    {title: 'Read', status: false},
    {title: 'Coffee', status: true}
]

export const ToDoList = () => (
    <List animated verticalAlign='middle' size='huge' divided relaxed>
        {toDos.map(({title, status}) => (
            <ToDo key={title} todoTitle={title} todoStatus={status} />
        ))}
    </List>
)
