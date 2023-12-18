import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import preloder from './preloder.gif';

const Page2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     
    const fetchData = async () => {
      try {
        // Simulating a delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [lastUpdated, setLastUpdated] = useState(null);

  // useEffect hook to update the timestamp when the component mounts
  useEffect(() => {
    updateTimestamp();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Function to update the timestamp
  const updateTimestamp = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // Use toLocaleDateString to get only the date
    setLastUpdated(formattedDate);
  };





  const text = [
    {
"source" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpmEqTh8j44BCLXjAulHIeBmjVXEvWpdGjw&usqp=CAU",
"title"  : "F22 RAPTOR",
"description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
"buttontext" : "Know More",
"alt":"F22 RAPTOR IMAGE",
"link":"/"
},

 
{
  "source" : "https://lh3.googleusercontent.com/p/AF1QipN39SVXf6ZTYHyy-VBShl6kuPGHDiSUY_meTZK0=s680-w680-h510",
  "title"  : "AL-AMIN Admission Test",
  "description" : "I have given the admission test in Al-Amin Mission.I want to go there.I hope that I will got the opportunity to go there.Al-Amin mission is really impressive.I wish to go there now.",
  "buttontext" : "Know More",
  "alt":"AL-AMIN MISSION",
  "link":"/"
  },
  {
    "source" : "https://lh3.googleusercontent.com/p/AF1QipN39SVXf6ZTYHyy-VBShl6kuPGHDiSUY_meTZK0=s680-w680-h510",
    "title"  : "AL-AMIN Admission Succes",
    "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
    "buttontext" : "Know More",
    "alt":"AL-AMIN MISSION",
    "link":"/"
    },

    {
      "source" : "https://www.modelairplanenews.com/wp-content/uploads/2011/08/F-22-Flight-03.jpg",
      "title"  : "F22 RAPTOR",
      "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
      "buttontext" : "Know More",
      "alt":"F22 RAPTOR IMAGE",
      "link":"/"
      },
      
       
      {
        "source" : "https://www.modelairplanenews.com/wp-content/uploads/2011/08/F-22-Flight-03.jpg",
        "title"  : "F22 RAPTOR",
        "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
        "buttontext" : "Know More",
        "alt":"F22 RAPTOR IMAGE",
        "link":"/"
        },
        {
          "source" : "https://www.modelairplanenews.com/wp-content/uploads/2011/08/F-22-Flight-03.jpg",
          "title"  : "F22 RAPTOR",
          "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
          "buttontext" : "Know More",
          "alt":"F22 RAPTOR IMAGE",
          "link":"/"
          },

          {
            "source" : "https://www.modelairplanenews.com/wp-content/uploads/2011/08/F-22-Flight-03.jpg",
            "title"  : "F22 RAPTOR",
            "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
            "buttontext" : "Know More",
            "alt":"F22 RAPTOR IMAGE",
            "link":"/"
            },
            
             
            {
              "source" : "https://www.modelairplanenews.com/wp-content/uploads/2011/08/F-22-Flight-03.jpg",
              "title"  : "F22 RAPTOR",
              "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
              "buttontext" : "Know More",
              "alt":"F22 RAPTOR IMAGE",
              "link":"/"
              },
              {
                "source" : "https://www.modelairplanenews.com/wp-content/uploads/2011/08/F-22-Flight-03.jpg",
                "title"  : "F22 RAPTOR",
                "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
                "buttontext" : "Know More",
                "alt":"F22 RAPTOR IMAGE",
                "link":"/"
                },

];

  if (loading) {
     
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <center>
            <img style={{ height: '50px', width: '50px' }} src={preloder} alt="loading" />
            <p>please wait...</p>
          </center>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>
          <u>OUR DAILY NEWS</u>
        </h1>
      </center>
      <br />
      <div className="container">
        <div className="row">
          {text.map((element) => (
            <div className="col-md-4 col-sm-6 mb-4" key={element.title}>
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img
                  src={element.source}
                  className="card-img-top"
                  alt={element.alt}
                  style={{ height: '200px' }} // Adjust the height as needed
                />
                <div className="card-body">
                  <b>
                    <u>
                      <h5 className="card-title">{element.title.slice(0, 30)}</h5>
                    </u>
                  </b>
                  <p className="card-text">{element.description.slice(0, 190)}</p>
                  <p>Last Updated: {lastUpdated}</p>
                  <Link to={element.link} className="btn btn-primary">
                    {element.buttontext}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <Link to={`/Dailynews/page1`} className="btn btn-primary">
          Previous
        </Link>
        <Link to="/Dailynews/page2" className="btn btn-primary">
          Next
        </Link>
      </div>
    </>
  );
};

export default Page2;
