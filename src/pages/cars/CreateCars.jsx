import { useState } from 'react';
import axios from 'axios';

const CreateCars = () => {
    const [carData, setCarData] = useState({
        name: "",
        make: "",
        model: "",
        color: "",
        year: 0,
        isForSale: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(carData);
        axios({
            method: "POST",
            url: "/cars",
            data: carData // You will find this data in ***req.body*** of the route
        }).then((res) => {
            console.log(res);
        });
    }

    return (
        <div>
            <h1>New car page</h1>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={carData.name} onChange={(e) => setCarData({ ...carData, name: e.target.value })} />
                <br />
                Make: <input type="text" name="make" value={carData.make} onChange={(e) => setCarData({ ...carData, make: e.target.value })} />
                <br />
                Model: <input type="text" name="model" value={carData.model} onChange={(e) => setCarData({ ...carData, model: e.target.value })} />
                <br />
                Color: <input type="text" name="color" value={carData.color} onChange={(e) => setCarData({ ...carData, color: e.target.value })} />
                <br />
                Year: <input type="number" name="year" value={carData.year}
                    onChange={(e) => setCarData({ ...carData, year: +e.target.value })} />
                <br />
                Is for Sale: <input type="checkbox" name="isForSale" value={carData.isForSale}
                    onChange={(e) => setCarData({ ...carData, isForSale: !carData.isForSale })} />
                <br />
                <button>Create car</button>
            </form>
        </div>
    );
}

export default CreateCars;
