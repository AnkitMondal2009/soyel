import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Error(props) {
  const mode = props.mode;

  const cardStyle = {
    maxWidth: '50rem',
    margin: 'auto',
    backgroundColor: mode === 'dark' ? '#343a40' : 'white',
    color: mode === 'dark' ? 'white' : 'black',
  };

  const headerStyle = {
    backgroundColor: mode === 'dark' ? '#rgb(185, 138, 143)' : '#f8d7da',
    color: mode === 'dark' ? 'white' : '#721c24',
  };

  const imageStyle = {
    width: '40%',
    height: 'auto',
    filter: mode === 'dark' ? 'invert(0.77)' : 'invert(0)',
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card className='mx-auto' border="danger" style={cardStyle}>
        <Card.Header className='text-danger' style={headerStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
          </svg> ERROR
        </Card.Header>
        <Card.Body>
          <Card.Title className='text-danger'><strong>OOOPSY!!!!</strong></Card.Title>
          <Card.Text>
            Error 404: Page Not Found. Looks like you are in the wrong address.
          </Card.Text>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={imageStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_yyoq_zCS2IiWfd6bILwE54Dp7-4np_NtQ&usqp=CAU" alt="error" />
            <br />
            <h1 >Sorry but we cannot find your page... </h1>
            <br />
            <p>please go to our home page <Link to="/">Lets Go</Link></p>
          </div>
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br /><br />

      <br />
    </>
  );
}
