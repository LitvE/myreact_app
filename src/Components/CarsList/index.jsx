import React from "react";
import Car from "../Car";

const carsDB = [
    {id: 1, mark: "Ford", type: "Mustang", price: 25000},
    {id: 2, mark: "Mazda", type: "CX5", price: 15000},
    {id: 3, mark: "BMW", type: "X7", price: 50000},
]

class CarsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cars: carsDB.map((car) => ({...car, 
                isSelected: false,
            })),
        }
    }

    mapCars = (car, index) =>{
        const del = () =>{
            const newCars = [...this.state.cars];
            newCars.splice(index, 1);
            this.setState({cars: newCars});
        };
        return (
            <Car key={car.id} mark={car.mark} type={car.type} price={car.price} deleteHandler={del}/>
        );
    };

    render (){
        const {cars} = this.state;
        const list = cars.map(this.mapCars);
        return (
            <article>{list}</article>
        );
    }
}

export default CarsList;