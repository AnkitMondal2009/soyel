import {React,useState,useEffect} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import react from './image/react.png';
import html from './image/html.jpg';
import css from './image/css.png';
import js from './image/js.png';
import python from './image/python.jpg';
import arduino from './image/arduino.png';
import mongodb from './image/mongodb.png';
import nodejs from './image/nodejs.jpg';
import "./Jobscroll.css";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 

 
 
 

 

const MyResponsiveTable = () => {



  const jobitems=[
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":react,
      "salt":"html"
    },
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":html,
      "salt":"html"
    },
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":css,
      "salt":"html"
    },
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":python,
      "salt":"html"
    },
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":arduino,
      "salt":"html"
    },
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":js,
      "salt":"html"
    },
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":mongodb,
      "salt":"html"
    },
    {
      "name":"React Devolopment",
      "amount":"1,00,000",
      "img":nodejs,
      "salt":"html"
    },







  ]

 
     
   

  return (
    <div className="job" >
      <div className="mx-3">
        <div className="table-responsive"  >
           
          <br />


          <Table striped bordered hover variant="light" style={{ maxWidth: "900px", height:"300px",overflow:"scroll"}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Type of JOB</th>
                <th>Amount of money</th>
                <th></th>
              </tr>
            </thead>
            <tbody   >


               {jobitems.map((element) =>{
                 return   <tr>
                 <td><img style={{height:"30px",width:"30px"}} src={element.img} alt={element.salt}/></td>
                 <td><b>{element.name}</b></td>
                 <td  >{element.amount}Rs</td>
                 <td><button    className="d-flex justify-content-between btn btn-primary" style={{ marginLeft: "50px" }}>get</button>
                  
              </td>
               </tr>
               })}

               
            </tbody>
          </Table>


           

        </div>
      </div>
       
    </div>
  );
};

export default MyResponsiveTable;
