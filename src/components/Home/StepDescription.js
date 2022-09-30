import { Grid, Header, Icon } from "semantic-ui-react";

const StepDescription = (props) => {
    return (
        <Grid divided>
            <Grid.Row columns={2} style={{padding: "3rem 0", backgroundColor: '#EEE'}}>
                <Grid.Column textAlign="center">
                    <Header as='h2' color="blue">Add or find a new book for community</Header>
                    <p style={{paddingBottom: '1rem'}}>With Na Bisso, you can make donations to the poorest or exchange your books 
                    with community actors</p>
                    <Icon name="book" size="big" color="blue"/>
                </Grid.Column>
                <Grid.Column textAlign="center">
                    <Header as='h2' color="blue">Notification alert</Header>
                    <p style={{paddingBottom: '1rem'}}>The book you are looking for is not available? No stress, you can add an alert 
                    and be informed when this book will be available on Nabisso</p>
                    <Icon name='alarm' size="big" color="blue"/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
} 

export default StepDescription