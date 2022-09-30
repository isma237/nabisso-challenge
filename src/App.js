import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NavBar from './components/navbar';
import '@aws-amplify/ui-react/styles.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddBook from './components/Book';

import { Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { Grid } from 'semantic-ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
Amplify.configure(awsconfig);


function App({signOut, user}) {
  return (
    <Router>
      <NavBar user={user}/>
      <Grid columns='one'>
        <Grid.Row>
          <Grid.Column>
            <Routes>
                <Route exact path="/"  element={<Home />} />
                <Route exact path="/books"  element={<Books />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/books/:id" element={<SingleBook />} />
                <Route path="/create-annonce" element={<AddBook />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </Router>
  );
}

export default withAuthenticator(App);



