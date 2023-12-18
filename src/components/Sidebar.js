import React from 'react';
 
import './Sidebar.css'
function YourNavbar({ onPageChange, style }) {
 

  

  return (
    <div  >
    {/* <Navbar expand="lg" bg="light" variant="light" style={style}>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="navbar-nav">
          <Nav.Link href="#" onClick={() => onPageChange('admin')}>Admin</Nav.Link>
          <Nav.Link href="#" onClick={() => onPageChange('comments')}>Comments-Email</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
          <Nav.Link href="#" disabled>Disabled</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
    <div className= 'open' style={{backgroundColor:"grey",height:"100vh",boxShadow:"0 0 0.5em grey",width:"300px", }} >
    
    <div className="sidebar-content">
      <div className="sidebar-header">
        MR.PRIME CODER
      </div>
      <ul style={{backgroundColor:"lightgray"}}>
        <li onClick={() => onPageChange('admin')}>Admin</li>
        <li onClick={() => onPageChange('comments')}>comments</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>

   
  </div>
  );
}

export default YourNavbar;