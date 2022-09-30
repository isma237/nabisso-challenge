import { Link } from 'react-router-dom';
import { Input, Menu, Container } from 'semantic-ui-react'
import { useState } from 'react';

const NavBar = (props) => {

  const [activeItem, setActiveItem] = useState(undefined);
  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
  }
  return (
    <Menu>
      <Container>
        <Menu.Item header>Na Bisso</Menu.Item>
        <Menu.Item
            as={Link}
            name='home'
            to='/'
            content="Home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
        />
        <Menu.Item
            as={Link}
            name='books'
            to='/books'
            content="Books"
            active={activeItem === 'books'}
            onClick={handleItemClick}
        />

        <Menu.Item
          as={Link}
          name='dashboard'
          content='Espace administrateur'
          to='/dahsboard'
          active={activeItem === 'dashboard'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default NavBar