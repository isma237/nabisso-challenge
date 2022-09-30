import { Button, Container, Grid, Header } from "semantic-ui-react"
import { useState, useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import ListBook from "../ListBook";
import { Link } from "react-router-dom";
import formatListBooks from "../../helpers";
import { listBooks } from "../../graphql/queries";
const Profile = props => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async() => {
        const { attributes } = await Auth.currentAuthenticatedUser()

        const results = await API.graphql(graphqlOperation(listBooks, {filter: {ownerId: {eq: attributes.sub}}}))
        const data = await formatListBooks(results.data.listBooks.items)
        setBooks(data)
    }

    return (
        <Container>
            <Grid>
                <Grid.Row columns={16}>
                    <Grid.Column width={8}><Header as='h1'>My Books</Header></Grid.Column>
                    <Grid.Column width={8} textAlign='right'><Button 
                            primary
                            as={Link}
                            to="/create-annonce"
                        >Add book</Button></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={12}>
                    <ListBook profile={true} books={books}/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Profile;