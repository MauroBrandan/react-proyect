import React from 'react'
import { Header as Heading, Grid, Icon } from 'semantic-ui-react'

export const Header = () => (
    <Heading as='h1' color='teal' style={{padding: "12px"}}>
        <Grid columns='equal'>
            <Grid.Column>
               <Icon name='list layout'/> My To Do List
            </Grid.Column>
            <Grid.Column textAlign='right'>
                Monday, March 13
            </Grid.Column>
        </Grid>
    </Heading>
)
