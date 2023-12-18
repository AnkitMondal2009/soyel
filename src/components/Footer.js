 

 // Footer.js
 
import { Link } from 'react-router-dom';

 

import React, { useState } from 'react';
import { useCommentContext } from '../CommentContext';

export default function Footer(props) {
  const [comment, setComment] = useState();
  const { addComment } = useCommentContext();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <footer className="footer-section" style={{ background : " #c2c2c2"}} >
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
             
        </div>
        <div className="footer-content pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                        <div className="footer-logo">
                              <img src={props.logo} className="img-fluid" alt="logo"/>
                        </div>
                        <div className="footer-text">
                            {props.footertext}
                        </div>
                        <div className="footer-social-icon">
                            <span>Follow us</span>
                            <Link to="/"><i className="fab fa-facebook facebook-bg"></i></Link>
                            <Link to="/"><i className="fab fa-twitter twitter-bg"></i></Link>
                            <Link to="/"><i className="fab fa-google-plus-g google-bg"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                     
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Subscribe</h3>
                            <div className="subscribe-form">
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Leave a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
                        </div>
                        <div className="footer-text mb-25">
                             
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
       
      
    </footer>
  );
}