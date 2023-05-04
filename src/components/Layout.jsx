import React from 'react'
import { Grid } from 'semantic-ui-react'

import { Header } from './Header'
import { ToDosProvider } from '../context/ToDosContext'

export const Layout = ({ children }) => {
	return (
		<ToDosProvider>
			<Header />
			<Grid textAlign='center' style={{ height: '55vh' }} verticalAlign='middle'>
				<Grid.Column style={{ width: '80%', maxWidth: 500 }}>
                    {children}
                </Grid.Column>
			</Grid>
		</ToDosProvider>
	)
}
