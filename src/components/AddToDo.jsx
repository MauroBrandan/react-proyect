import React, { useState } from 'react'
import { Button, Modal, Input, Icon } from 'semantic-ui-react'

export const AddToDo = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
            <Button icon basic floated='right' style={{boxShadow: "none", padding: 0}}>
                <Icon size='huge' color='teal' name='add square' style={{cursor:"pointer"}}/>
            </Button>
        }
        style={{textAlign: "center"}}
        >
        <Modal.Header>New To Do</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <Input />
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='green' onClick={() => setOpen(false)}>Add</Button>
        </Modal.Actions>
        </Modal>
    )
}