  import axios from 'axios';
  import React, { useEffect, useState } from 'react'
  import "./index.css"

  const ShowCars = () => {
    const [cars, setCars] = useState([]);


    useEffect(()=>{
      axios({
          method: "GET",
          url: "/api/cars",
      }).then((res)=>{
          console.log(res.data);
          setCars(res.data)
      })

  },[])
    return (
      <div><h1>Cool Cars.</h1>
        {cars.map((car) => <div key={JSON.stringify(car)}>
          <h2>{car.make}
          <br />
          {car.model}</h2>
          <img className='images' src={car.image} alt="image"/>
          <br/>{car.year}</div>
          )}
      
        </div>
    )
  }

  export default ShowCars;