import { Grid, Header, Icon } from "semantic-ui-react";

const StepDescription = (props) => {
    return (
        <Grid divided>
            <Grid.Row columns={1} style={{padding: "3rem 0", backgroundColor: '#EEE'}}>
                <Grid.Column textAlign="center">
                    <Header as='h2' color="blue">Add or find a new book for community</Header>
                        <p style={{paddingBottom: '1rem'}}>Add a school book and increase a student's chances of success</p>
                    <Icon name="book" size="big" color="blue"/>
                </Grid.Column>
                
            </Grid.Row>
        </Grid>
    );
} 

export default StepDescription