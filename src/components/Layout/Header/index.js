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
    // Burger menu
    open: false,
    isBurger: false,
  };

  /*
   * LifeCycles
   */
  componentDidMount() {
    window.addEventListener('resize', this.checkSize);
    this.checkSize();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isBurger !== this.state.isBurger && this.state.open) {
      this.hideMenu();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkSize);
  }

  /*
   * Actions
   */
  showMenu = () => {
    this.setState({ open: true });
  };

  hideMenu = () => {
    this.setState({ open: false });
  };

  checkSize = () => {
    this.setState({
      isBurger: window.innerWidth < 900,
    });
  };

  /*
   * Handlers
   */

  /*
   * Render
   */
  render() {
    const { isBurger, open } = this.state;
    return (
      <Container>
        <Nav open={open}>
          {/* Logo */}
          <Logo to="/">DeviensDev</Logo>

          {/* Links */}
          {(!isBurger || open) && (
            <Links open={open}>
              {data.map(({ to, title }) => (
                <Item open={open} key={to}>
                  <Link to={to} activeClassName="activeLink">
                    {title}
                  </Link>
                </Item>
              ))}
            </Links>
          )}

          {/* 🍔 */}
          {isBurger && (
            <Burger
              open={open}
              hideMenu={this.hideMenu}
              showMenu={this.showMenu}
            />
          )}
        </Nav>

        {/* @TODO : Component Search */}
      </Container>
    );
  }
}
