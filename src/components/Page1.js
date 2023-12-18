import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import preloder from './preloder.gif';

const Page1 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call delay (remove this in your actual code)
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




  const articles1 = [
    {
      "source" : "data:image/jpeg;base64,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",
      "title"  : "F22 RAPTORfff",
      "description" : "Using Gear motor,Arduino PRO Nano and many other higher instruments I have build a working model of F22 Raptor.Hope you will like this.To buy this please contack with me.",
      "buttontext" : "Know More",
      "alt":"F22 RAPTOR IMAGE",
      "link":"/"
      },
      
       
      {
        "source" : "https://lh3.googleusercontent.com/p/AF1QipOVy2NHnF5EzmnLhvDG8WBpMwdY5eFEfqKpfZhz=s680-w680-h510",
        "title"  : "AL-AMIN Admission Test",
        "description" : "I have given the admission test in Al-Amin Mission.I want to go there.I hope that I will got the opportunity to go there.Al-Amin mission is really impressive.I wish to go there now.",
        "buttontext" : "Know More",
        "alt":"AL-AMIN MISSION",
        "link":"/"
        },
        {
          "source" : "https://3.bp.blogspot.com/-Q9Zkjviyxz4/VzNX9yC2jFI/AAAAAAAAAPs/9Fim8HvNKKE0734HeJZ4Pmy7qOOJBVI6ACK4B/s1600/aacert%2Bdefault%2Bpic.jpg",
          "title"  : "AL-AMIN Admission Succes",
          "description" : "I have got 96% marks in AL-AMIN MISSION Admition test so the principal give me the opportunity to study in the mission.I will go there on 3rd january in 2024.So wish for me.",
          "buttontext" : "Know More",
          "alt":"AL-AMIN MISSION",
          "link":"/"
          },
      
          {
            "source" : "https://st2.depositphotos.com/1277251/10188/i/380/depositphotos_101885138-stock-photo-drone-flying-over-the-city.jpg",
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
                "source" : "https://thumbs.dreamstime.com/b/silhouette-young-man-model-rc-airplane-against-sunset-clouds-sunburst-34839111.jpg?w=768",
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
          {articles1.map((element) => (
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

export default Page1;










 