import { Link } from "react-router-dom";
import { Item, Label, Icon, Button } from "semantic-ui-react";

const DetailsBook = (props) => {
   return (
        <Item key={props.book.id}>
            <Item.Image src={props.book.picture_url}/>
            <Item.Content>
                <Item.Header as='h3'>
                    <Link to={'/books/' + props.book.id}>{props.book.name}</Link>
                </Item.Header>
                <Item.Meta>
                    <Label basic color='teal'>{props.book.category.name}</Label>
                </Item.Meta>
                <Item.Description>
                    <p>{props.book.description}</p>
                    { props.book.target === "Troc" ?
                        <Label ribbon='right' color="green">
                            <Icon name='announcement' style={{marginRight: '10px'}} />{props.book.target}
                        </Label>
                        :
                        <Label ribbon='right' color="teal">
                            <Icon name='exchange' style={{marginRight: '10px'}} />{props.book.target}
                        </Label>
                    }
                </Item.Description>
                <Item.Extra>
                    <Label icon='calendar' content={props.book.publish} />
                    <Label icon='user' content={props.book.owner.name} />
                </Item.Extra>
            </Item.Content>
        </Item>
   );
}

export default DetailsBook;