  import axios from 'axios';
  import React, { useEffect, useState } from 'react'

  const ShowCars = () => {
    const [cars, setCars] = useState([]);


    useEffect(()=>{
      axios({
          method: "GET",
          url: "/cars",
      }).then((res)=>{
          console.log(res.data);
          setCars(res.data)
      })

  },[])
    return (
      <div>Show all Cars:
        {cars.map((car) => <div key={JSON.stringify(car)}>{car.name}{car.color}<br/>{car.year}</div>)}
      
        </div>
    )
  }

  export default ShowCars;