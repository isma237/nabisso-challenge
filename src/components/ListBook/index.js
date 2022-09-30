import { useState, useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify'
import { listBooks } from '../../graphql/queries'
import { Grid, Item, Loader } from "semantic-ui-react";
import DetailsBook from "../DetailsBook";
import formatListBooks from "../../helpers";


const ListBook = (props) => {
    const [books, setbooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData () {
        try {
            const results = await API.graphql(graphqlOperation(listBooks, {limit: props.limit, filter: props.filter}))
            const books = await formatListBooks(results.data.listBooks.items)
            setbooks(books)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }


    return (
        <Grid.Row>
            {isLoading ? 
                <Grid.Column width={16} textAlign='center'>
                    <Loader active inline />
                </Grid.Column>
                
            : <Grid.Column width={15}>

                {props.profile ? 
                    <>
                    {props.books.length === 0 && <p>You have not published book on Na Bisso</p>}
                        <Item.Group divided>
                            {props.books.map(item =>
                                <DetailsBook book={item} key={item.id}/>
                            )}
                        </Item.Group>
                    </>
                :
                <>
                    {books.length === 0 && <p>You have not published book on Na Bisso</p>}
                    <Item.Group divided>
                        {books.map(item =>
                            <DetailsBook book={item} key={item.id}/>
                        )}
                    </Item.Group>
                </>
                }
                
            </Grid.Column>}
        </Grid.Row>
    );
}

ListBook.defaultProps = {
    limit: 10,
    profile: false,
    books:[]
}

export default ListBook