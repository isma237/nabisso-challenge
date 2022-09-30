import { Container, Grid, Icon, Header, Input} from "semantic-ui-react";
import { useState } from "react";
import ListBook from "../ListBook";

const Books = (props) => {
  const formData = { search: ""};
  const filterModel = {
    name: { wilcard: "*soir*" }  
  }
  const [search, setSearch] = useState(formData);
  //const [categories, setCategories] = useState([]);
  //const [targets, setTargets] = useState([]);
  //const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState(filterModel);

  

  /*

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }*/

  function setInput(key, value) {
    search[key] = value;
    setSearch(search);


    /*
    if(key === 'category'){
        const category = {
            categoryId : {eq: search.category}
        }
        filter['and'][0] = category
    }

    if(key === 'target'){
        const category = {
            targetId : {eq: search.target}
        }

        filter['and'][1] = category
    }
    */

    
    setFilter(filter);
    console.log(filter)
   
  }
    /*
  useEffect(() => {
    //fetchData();
  }, []);

  
  async function fetchData() {
    //const categories = await API.graphql(graphqlOperation(listCategories));
    setCategories(categories.data.listCategories.items);
    const targets = await API.graphql(graphqlOperation(listTargets));
    setTargets(targets.data.listTargets.items)
  }

  const TargetForm = (
    <Form>
      <Form.Group grouped>
        {targets.map(target => 
            <Form.Field key={target.id}>
                <Form.Radio
                    label={target.label}
                    name='target'
                    value={target.id === search.targer}
                    onChange={e => setInput('target', target.id)}
                />
            </Form.Field>
        )}
      </Form.Group>
    </Form>
  )

  const CategoryForm = (
    <Form>
      <Form.Group grouped>
        {categories.map(cat => 
            <Form.Field key={cat.id}>
                <Form.Radio
                    label={cat.name}
                    name='category'
                    value={search.category == cat.id}
                    onChange={e => setInput('category', cat.id)}
                />
            </Form.Field>
        )}
      </Form.Group>
    </Form>
    
  )*/
  return (
    <>
      <Grid
        textAlign="center"
        style={{
          backgroundColor: "#2185d0",
          padding: "2rem 0",
        }}
      >
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h1" style={{ color: "white !important" }}>
              One Student, One Book
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container style={{ marginTop: "1rem" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h1">See all books</Header>
            </Grid.Column>
            <Grid.Column width={16}>
              <p>You can </p>
              <Input
                fluid
                name="search"
                value={search.search}
                onChange={(event) => setInput("search", event.target.value)}
                icon={
                  <Icon
                    name="search"
                    inverted
                    circular
                    link
                    onClick={(e) => console.log(true)}
                  />
                }
                placeholder="Search..."
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          {/* 
            <Grid.Column width={4}>
              <Accordion as={Menu} vertical>
                <Menu.Item>
                  <Accordion.Title
                    active={activeIndex === 0}
                    content="Category"
                    index={0}
                    onClick={handleClick}
                  />
                  <Accordion.Content
                    active={activeIndex === 0}
                    content={CategoryForm}
                  />
                </Menu.Item>

                <Menu.Item>
                  <Accordion.Title
                    active={activeIndex === 1}
                    content="Target"
                    index={1}
                    onClick={handleClick}
                  />
                  <Accordion.Content
                    active={activeIndex === 1}
                    content={TargetForm}
                  />
                </Menu.Item>
              </Accordion>
            </Grid.Column>
            */}
            <Grid.Column width={12}>
              <ListBook limit={null} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Books;
