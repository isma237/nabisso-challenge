import { Container, Grid, Icon, Header, Input} from "semantic-ui-react";
import { useState } from "react";
import ListBook from "../ListBook";

const Books = (props) => {
  const formData = { search: ""};

  const [search, setSearch] = useState(formData);


  function setInput(key, value) {
    search[key] = value;
    setSearch(search);
  }
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
          </Grid.Row>
          <Grid.Row>
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
