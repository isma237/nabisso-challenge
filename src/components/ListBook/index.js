import { useState, useEffect } from "react";
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { listBooks } from '../../graphql/queries'
import { Grid, Item, Loader } from "semantic-ui-react";
import moment from "moment";
import DetailsBook from "../DetailsBook";
import Book from "../Book/Book";


const ListBook = (props) => {
    const [books, setbooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const formatListBooks = (data) => {
        const books = []
        data.forEach(async book => {
            const signedUrl = await Storage.get(book.picture_key);
            books.push(new Book(book.id, 
                book.name, 
                book.description, 
                signedUrl, 
                book.category,
                moment(book.createdAt).fromNow(),
                {
                    id: book.ownerId,
                    name: book.ownerName
                },
                book.target.label
            ))
            setbooks(books)
        });
    }

    useEffect(() => {
        fetchData(props);
    }, []);


    async function fetchData (props) {
        try {
            const results = await API.graphql(graphqlOperation(listBooks, {limit: props.limit, filter: props.filter}))
            formatListBooks(results.data.listBooks.items)
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
                <Item.Group divided>
                    {books.map(item =>
                        <DetailsBook book={item} key={item.id}/>
                    )}
                </Item.Group>
            </Grid.Column>}
        </Grid.Row>
    );
}

ListBook.defaultProps = {
    limit: 10,
    /*filter : {
        name: {regexp: "soir*"}
    }*/
}

export default ListBook