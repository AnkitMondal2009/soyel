
import React, { useState } from 'react';
import { useCommentContext } from '../CommentContext';
import Button from 'react-bootstrap/Button';
import Sidebar from './Sidebar';
import './Contack.css';
 
 
export default function Admin({ setShowNavbarFooter }) {
  const [currentPage, setCurrentPage] = useState('admin'); // Default to the admin home page
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const { comments, eraseComments } = useCommentContext();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);

  };

  const handleAuthenticate = (e) => {
    e.preventDefault();

    // Replace 'your_admin_password' with the actual password
    const correctPassword = 'nopassword';
    const correctname = 'Ankit Mondal';

    if (name !== correctname || password !== correctPassword) {
      alert('Incorrect name and password. Access denied. If you are not admin, please don\'t try 😟😟😟');
      setname('');
      setPassword('');
      return;
    }

    setIsAuthenticated(true);
    setShowNavbarFooter(false); // Hide Navbar and Footer
    alert('Welcome Back MR. Ankit Mondal');
  };


   


  return (
    <div className="admin-container"  >
    

      <div className="admin-content">
        {isAuthenticated ? (
          <>
            {currentPage === 'admin' && (
              <div  style={{display:"flex"}}>
               <Sidebar    onPageChange={handlePageChange} />
                <div className="mx-3">
                <br /><br />
                <h2>Admin Panel</h2>
                <iframe style={{height:"500px",width:"500px"}} src="http://quickchart.io/chart?v=2.9.4&c={ type: 'line', data: { labels: ['January', 'February', 'March', 'April', ' ... f (value == max) { return `Max: ${value}`; } }, }, }, }, }"></iframe>
                </div>
              </div>
            )}


            {currentPage === 'comments' && (




              <div style={{display:"flex"}}>
                             
                             <Sidebar    onPageChange={handlePageChange} />
                <div className="mx-3">
                 <br /><br />
                <h2>Email-Comment Pannel</h2>
                <div className="commentbar-1">
                  {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                  
                  </div>
                  <br/>
                  <button className="btn btn-primary" onClick={eraseComments}>Erase Comments</button>
                </div>
                 
              </div>








            )}


          </>
        ) : (
          <>
            <br /><br />

            <div className="contact-container">
              <div className="container py-5">
                <h2 className="text-center mb-4">Admin Authentication</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      className="form-control"
                      id="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <Button onClick={handleAuthenticate} variant="primary" type="submit">
                      Authenticate
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


