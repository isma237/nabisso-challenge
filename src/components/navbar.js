import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react'
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
            name='profile'
            to={'/profile/' + props.user.attributes.sub}
            content="My Profile"
            active={activeItem === 'profile'}
            onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            {props.user.username}
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