import React, { useState } from 'react'
import { Button, Modal, Form, TextArea, Icon } from 'semantic-ui-react'

import { useToDos } from '../hooks/useToDos'

export const AddToDoButton = () => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')
	const { addToDo } = useToDos()

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const handleClick = () => {
		setOpen(false)
		addToDo(value)
	}

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			trigger={
				<Button icon basic floated='right' style={{ boxShadow: 'none', padding: 0 }}>
					<Icon
						size='huge'
						color='teal'
						name='add square'
						style={{ cursor: 'pointer' }}
					/>
				</Button>
			}
			style={{ textAlign: 'center' }}
		>
			<Modal.Header>New To Do</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Form>
						<TextArea
							placeholder='I have to do...'
							style={{ minHeight: 100 }}
							onChange={handleChange}
						/>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button color='green' onClick={handleClick}>
					Add
				</Button>
			</Modal.Actions>
		</Modal>
	)
}
