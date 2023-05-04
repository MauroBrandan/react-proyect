import React from 'react'
import { Grid } from 'semantic-ui-react'

import { Header } from './Header'

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Grid textAlign='center' style={{ height: '55vh' }} verticalAlign='middle'>
				<Grid.Column style={{ width: '80%', maxWidth: 500 }}>{children}</Grid.Column>
			</Grid>
		</>
	)
}
