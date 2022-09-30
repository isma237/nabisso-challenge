import { Button, SelectField, TextAreaField, TextField, View } from "@aws-amplify/ui-react"
import { useState, useEffect} from "react";

import { API, Auth, graphqlOperation, Storage } from 'aws-amplify'
import { createBook } from '../../graphql/mutations'
import { listCategories, listTargets } from "../../graphql/queries";
import { Container, Grid, Header } from "semantic-ui-react";

const AddBook = (props) => {

    const [book, setBook] = useState({
        book_title: "",
        book_description: "",
        book_target: "",
        book_category: ""
    })

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fileData, setFileData] = useState();
    const [targets, setTargets] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(!isLoading)
        
        try{
            const result = await Storage.put(fileData.name, fileData, {contentType: fileData.type})
            const user = await Auth.currentAuthenticatedUser();
            await API.graphql(graphqlOperation(createBook, {
                input: {
                  name: book.book_title,
                  description: book.book_description,
                  categoryId: book.book_category,
                  picture_key: result.key,
                  targetId: book.book_target,
                  ownerId: user.attributes.sub,
                  ownerName: user.username
                }
            }))
        }catch(error) {
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    }

    const handleChange = (event) => {
        setBook({...book, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        document.title = 'Add a new book'
        fetchData();
    }, []);

    const fetchData = async() => {
        const categories = await API.graphql(graphqlOperation(listCategories))
        setCategories(categories.data.listCategories.items)

        const targets = await API.graphql(graphqlOperation(listTargets))
        setTargets(targets.data.listTargets.items)
    }

 
    return (
        <Container>
            <Grid>
                <Grid.Row columns={16}>
                    <Grid.Column width={12}>
                        <Header as='h1' color="teal">Add new book in Nabisso Library</Header>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="book_title"
                                padding="1rem 0"
                                label="Title of the book"
                                type="text"
                                value={book.book_title}
                                onChange={event => handleChange(event)}
                            ></TextField>


                            <SelectField
                                label="Book Category"
                                name="book_category"
                                onChange={event => handleChange(event)}
                                descriptiveText="Select book category">
                                    {categories.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
                            </SelectField>

                            <TextAreaField
                                name="book_description"
                                label="Book Description"
                                type="textarea"
                                size="small"
                                value={book.book_description}
                                onChange={event => handleChange(event)} />


                            <SelectField
                                label="Target"
                                name="book_target"
                                onChange={event => handleChange(event)}
                                descriptiveText="Purpose of your contribution">
                                {targets.map(target => 
                                    <option value={target.id} key={target.id}>{target.description}</option>
                                )}
                            </SelectField>

                            <TextField
                                name="book_picture"
                                padding="1rem 0"
                                required={true}
                                label="Add a picture of the book"
                                type="file"
                                onChange={event => setFileData(event.target.files[0])}
                            ></TextField>

                            <View as='div' padding="1rem 0">
                                <Button
                                    isLoading={isLoading}
                                    loadingText="On progress"
                                    type="submit"
                                    variation="primary"
                                    ariaLabel="Save"
                                >Publier</Button>
                            </View>
                        </form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default AddBook;