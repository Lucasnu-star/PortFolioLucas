import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CNavLink,
  CToggler,
  CNavItem,
} from '@coreui/react';

const Navbar = () => {
  

  return (
    <CNavbar expandable="sm" color="light" className="navbar-light">
      <CToggler inNavbar onClick={() => console.log('toggle')}>
        ☰
      </CToggler>
      <CContainer>
        <CNavbarBrand>Brand</CNavbarBrand>
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );

  };

 

export default Navbar;