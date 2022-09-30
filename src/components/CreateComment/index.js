import { Button, TextAreaField, View} from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { Container, Form, Grid, Message } from "semantic-ui-react";
const CreateComment = props => {

    const initialState = {content: ''}
    const [formData, setFormData] = useState(props.initialState);
    const [visible, setVisible] = useState(false);

    const setInput = (key, value) => {
        setFormData({...formData, [key]: value})
    }

    const handleSubit = (e) => {
        e.preventDefault();
        setFormData(initialState)
        if(formData.id !== undefined){
            props.updateComment(formData)
        }else{
            props.createComment(formData)
        }
        
    }

    const handleDismiss = () => {
        setVisible(true)
    }

    useEffect(() => {
        setFormData(props.initialState)
    }, [props.initialState]);


    return (
        <Container>
            <Grid with={10}>
            <Grid.Row>
                <Grid.Column width={10}>
                    {props.newComment &&
                        <Message
                        onDismiss={handleDismiss}
                        success
                        hidden={visible}
                        content='Comment added/saved'
                    />}
                </Grid.Column>
            </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Form onSubmit={handleSubit}>
                            <TextAreaField
                                name="book_description"
                                placeholder="Tell us more about this book..."
                                label="Comment"
                                type="content"
                                value={formData.content}
                                onChange={e => setInput('content', e.target.value)} />

                            <View as='div' padding="1rem 0">
                                <Button 
                                    isLoading={props.loading}
                                    loadingText="On progress"
                                    type="submit" variation="primary"
                                    >Sumit</Button>
                            </View>
                            
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default CreateComment