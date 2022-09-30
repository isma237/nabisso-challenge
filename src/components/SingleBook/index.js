import { Container, Grid, Header, Icon, Image, Item, Label, Loader } from "semantic-ui-react"
import { useState, useEffect } from "react";
import { API, graphqlOperation, Storage, Auth } from "aws-amplify";
import { getBook, listBooks, listComments } from "../../graphql/queries";
import { createComment } from '../../graphql/mutations'
import moment from "moment";

import {
    Link,
    useParams
  } from "react-router-dom";
import Book from "../Book/Book";
import CreateComment from "../CreateComment";
import ListComments from "../ListComments";

const SingleBook = (props) => {

    let { id } = useParams();
    const [bookId, setBookId] = useState(id);
    const [book, setBook] = useState({});
    const [booksInCategory, setBooksInCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(false);


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
            setBooksInCategory(books)
        });
    }

    async function fetchData() {
        let result = await API.graphql(graphqlOperation(getBook, {id: bookId}))
        result = result.data.getBook
        const signedUrl = await Storage.get(result.picture_key);
        result['picture_url'] = signedUrl;

        const results = await API.graphql(graphqlOperation(listComments, 
            {filter : {bookId: {eq: bookId}}},
            {
                sort: {
                    direction: 'asc',
                    field: 'createdAt'
                }
            }))
        setComments(results.data.listComments.items)

        setBook(result);

        result = await API.graphql(graphqlOperation(listBooks, {
            filter : { and : [
                {id: {ne : bookId}},
                {categoryId: {eq: result.category.id}}
            ]}
        }))
        formatListBooks(result.data.listBooks.items)

    }

    const handleCreateComment = async (comment) => {
        const user = await Auth.currentAuthenticatedUser()
        setLoading(true)
        try{
            const result = await API.graphql(graphqlOperation(createComment, {
                input : {
                    content: comment.content,
                    ownerId: user.attributes.sub,
                    ownerName: user.username,
                    bookId: bookId
                }
            }))
            //console.log(result)
            setNewComment(true)
            setLoading(false)
            setComments([...comments, result.data.createComment])
        }catch(error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
        <Container style={{marginTop: "2rem"}}>
            {book.name !== undefined ?
                <>
                    <Grid divided>
                        <Grid.Row columns={16}>
                            <Grid.Column width={10}>
                                <Header as='h1' color="blue">{book.name}</Header>
                                <Grid.Row columns="one">
                                    <Grid.Column>
                                        <Label basic color="teal"><Icon name='book' /> {book.category.name}</Label>
                                        <Label color="blue"><Icon name='calendar' /> {book.target.description}</Label>
                                        <Label><Icon name='user' /> {book.ownerName}</Label>
                                        <Label><Icon name='calendar' /> {moment(book.createdAt).fromNow()}</Label>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns="one" style={{marginTop: "1rem"}}>
                                    <Image src={book.picture_url} alt="Book Picture" />
                                </Grid.Row>
                                <Grid.Row columns="one" style={{marginTop: "1rem"}}>
                                    <Grid.Column>
                                        <Header as='h4'>Description</Header>
                                    </Grid.Column>
                                    <Grid.Column style={{marginTop: "1rem"}}>
                                        <p>{book.description}</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Grid.Row>
                                    <Header as='h3'>Books in same category</Header>
                                </Grid.Row>
                                <Grid.Row style={{marginTop: "2rem"}}>
                                <Item.Group divided>
                                    {booksInCategory.map(book => 
                                        <Item key={book.id}>
                                            <Item.Image size='tiny' src={book.picture_url} />
                                            <Item.Content>
                                                <Item.Header as='h5'>
                                                    <Link to={'/books/' + book.id}>{book.name}</Link>
                                                </Item.Header>
                                                <Item.Description>{book.description}</Item.Description>
                                                <Item.Extra>Added from {book.publish}</Item.Extra>
                                            </Item.Content>
                                        </Item>
                                    )}
                                </Item.Group>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <CreateComment createComment={handleCreateComment} loading={loading}/>
                </>
            : 
            <Grid.Column width={16} textAlign='center'>
                <Loader active inline />
            </Grid.Column>
        }
        </Container>

        {book.name && <ListComments comments={comments}/>}
        </>
       
    )
}

export default SingleBook