import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@nextui-org/react";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Blog Life</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem onClick={handleNavigate('/')} isActive={isActive('/')}>
          <a className={isActive('/') ? "text-primary" : ""} style={{ cursor: 'pointer' }}>
            Home
          </a>
        </NavbarItem>
        <NavbarItem onClick={handleNavigate('/users')} isActive={isActive('/users')}>
          <a className={isActive('/users') ? "text-primary" : ""} style={{ cursor: 'pointer' }}>
            Users
          </a>
        </NavbarItem>
        <NavbarItem onClick={handleNavigate('/posts')} isActive={isActive('/posts')}>
          <a className={isActive('/posts') ? "text-primary" : ""} style={{ cursor: 'pointer' }}>
            Posts
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a className="text-primary">Login</a>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;