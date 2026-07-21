import React from "react";

function App() {

  const officeSpaces = [

    {
      name: "Sky Tower",
      rent: 45000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },

    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },

    {
      name: "Business Hub",
      rent: 55000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600"
    }

  ];

  return (

    <div style={{padding:"20px"}}>

      <h1>Office Space Rental App</h1>

      {

        officeSpaces.map((office,index)=>(

          <div
            key={index}
            style={{
              border:"1px solid gray",
              borderRadius:"10px",
              padding:"15px",
              marginBottom:"20px",
              width:"450px"
            }}
          >

            <img
              src={office.image}
              alt={office.name}
              width="400"
              height="250"
            />

            <h2>{office.name}</h2>

            <h3
              style={{
                color: office.rent < 60000 ? "red" : "green"
              }}
            >
              Rent : ₹{office.rent}
            </h3>

            <h4>
              Address : {office.address}
            </h4>

          </div>

        ))

      }

    </div>

  );

}

export default App;