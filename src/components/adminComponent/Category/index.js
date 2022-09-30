import { Grid, TextAreaField, TextField, Button, View, Alert,
        Heading} from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';

import { API, graphqlOperation } from 'aws-amplify'
import { createCategory } from "../../../graphql/mutations";
import { listCategories } from "../../../graphql/queries";
import ListCategories from '../ListCategories';

 

const Category = (props) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState();
    const [categories, setCategories] = useState([]);
    const [displayForm, setDisplayForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try{
            await API.graphql(graphqlOperation(createCategory, {
                input: {
                    name: categoryName,
                    description: categoryDescription
                }
            }))
            setAlert({
                heading : 'Enregistrement effectué',
                message: 'La nouvelle catégorie a été enregistrée',
                variation: 'success'
            })
        }catch(error) {
            setAlert({
                heading : 'Enregistrement impossible',
                message: 'Vérifier que le champ Name est renseigné',
                variation: 'error'
            })
        }finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        const fetchData = async() => {
            const result = await API.graphql(graphqlOperation(listCategories))
            setCategories(result.data.listCategories.items);
        }

        fetchData();
    });


    return (
        
        <Grid
            padding="1rem 0rem"
            columnGap="1rem"
            templateColumns="1fr 1fr 1fr 1fr">

            <Button
                columnStart="-1"
                columnEnd="4"
                variation='primary'
                onClick={() => {setDisplayForm(!displayForm)}}
            >{displayForm ? 'Hide form': 'Add new category'}</Button>


            {alert && 
                <Alert
                    columnStart="1"
                    columnEnd="3"
                    margin="1rem 0"
                    variation={alert.variation}
                    isDismissible={true}
                    hasIcon={true}
                    heading={alert.heading}
                >
                {alert.message}
                </Alert>
            }
            <View as='div' 
                    columnStart="1"
                    columnEnd="3">
                    <Heading level={5}>Create new category</Heading>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            padding="1rem 0"
                            name='category_name'
                            label='Name of new category'
                            value={categoryName}
                            isRequired={true}
                            onChange={e => setCategoryName(e.target.value)}
                        ></TextField>

                        <TextAreaField
                            margin="1rem 0"
                            name='description'
                            label='Description'
                            value={categoryDescription}
                            row={2}
                            onChange={e => setCategoryDescription(e.target.value)}
                        ></TextAreaField>

                        <Button
                            isLoading={isLoading}
                            loadingText='On progress'
                            margin="1rem 0"
                            type="submit"
                            variation="primary"
                            ariaLabel=""
                        >
                        Enregistrer
                        </Button>
                    </form>
                </View>

            <ListCategories categories={categories} />
            
        </Grid>
    );
}

export default Category