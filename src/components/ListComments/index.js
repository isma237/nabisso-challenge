import { Container, Grid, Comment, Header } from "semantic-ui-react";
import moment from "moment";
const ListComments = props => {
    return (
        <Container>
            <Grid width={16}>
                <Grid.Row columns={1}>
                    <Grid.Column width={12}>
                        <Comment.Group>
                            <Header as='h3' dividing>Comments</Header>
                            {props.comments.map(comment => 
                                <Comment key={comment.id}>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>{comment.ownerName}</Comment.Author>
                                        <Comment.Metadata>
                                        <div>{moment(comment.createdAt).fromNow()}</div>
                                        </Comment.Metadata>
                                        <Comment.Text>{comment.content}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            )}
                        </Comment.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default ListComments;