
import { Link } from 'react-router-dom';
import StepDescription from './StepDescription'
import { Container, Grid, Header, Button, Icon, Image} from "semantic-ui-react";
import ListBook from "../ListBook";

const Home = (props) => {
    
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Header as='h1'>One student, one book</Header>
                        <p>
                        With Nabisso, you can help those most in need by offering school books that your children no longer use
                        </p>
                        <Button 
                            primary
                            as={Link}
                            to="/create-annonce"
                        >Add Book</Button>
                        
                    </Grid.Column>
                    <Grid.Column width={6} className="middle aligned" textAlign="center">
                        <Image src='https://www.adeanet.org/sites/default/files/ecole_au_benin.jpg' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <StepDescription />
                
            <Grid style={{marginTop: "2rem"}}>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h2'>Recents books</Header>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign='right'>
                        <a href="/books">See all books <Icon name='chevron right'/></a>
                    </Grid.Column>
                </Grid.Row>
                
                <ListBook />
            </Grid>
        </Container>
    );
}

export default Home