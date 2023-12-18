// CommentContext.js
// CommentContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const CommentContext = createContext();

export const useCommentContext = () => {
  return useContext(CommentContext);
};

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Retrieve comments from localStorage on component mount
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  const addComment = (comment) => {
    const newComments = [...comments, comment];
    setComments(newComments);
    // Store comments in localStorage
    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  const eraseComments = () => {
    // Clear comments and remove from localStorage
    setComments([]);
    localStorage.removeItem('comments');
    // Reset authentication status
    setIsAuthenticated(false);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment, eraseComments, isAuthenticated, setIsAuthenticated }}>
      {children}
    </CommentContext.Provider>
  );
};



