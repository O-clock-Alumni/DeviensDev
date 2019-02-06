/*
 * Package Import
 */
import React from 'react';
import { Link } from 'gatsby';

/*
 * Local Import
 */
import { Container, Nav, Links, Item, Logo } from './style';
import Burger from './Burger';
import data from './data';

/*
 * Component
 */
export default class Header extends React.Component {
  /*
   * State
   */
  state = {
    open: false,
  };

  /*
   * Actions
   */
  showMenu = () => {
    this.setState({ open: true });
  };

  hideMenu = () => {
    this.setState({ open: false });
  };

  /*
   * Render
   */
  render() {
    const { open } = this.state;
    return (
      <Container>
        <Nav open={open}>
          {/* Logo */}
          <Logo to="/" />

          {/* Links */}
          <Links open={open}>
            {data.map(({ to, title }) => (
              <Item open={open} key={to}>
                <Link to={to} activeClassName="activeLink">
                  {title}
                </Link>
              </Item>
            ))}
          </Links>

          {/* 🍔 */}
          <Burger
            open={open}
            hideMenu={this.hideMenu}
            showMenu={this.showMenu}
          />
        </Nav>

        {/* @TODO : Component Search */}
      </Container>
    );
  }
}
