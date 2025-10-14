import React from "react";
import "./details-pop-up.css";
const DetailsPopUp = (props) => {
    const {
        totalCost = 0,
        selectedVenues = [],
        selectedAddOns = [],
        selectedMeals = [],
        numOfPeople = 0,
    } = props;
    return (
        <>
            <div>Total Cost for the Event</div>
            <h2>{totalCost}</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Unit Cost</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                </tr>
                {selectedVenues.map((venue) => (
                    <tr key={venue.id}>
                        <td>{venue.name}</td>
                        <td>${venue.cost}</td>
                        <td>{venue.count}</td>
                        <td>${venue.cost * venue.count}</td>
                    </tr>
                ))}
                {selectedAddOns.map((addOn) => (
                    <tr key={addOn.id}>
                        <td>{addOn.name}</td>
                        <td>${addOn.cost}</td>
                        <td>{addOn.count}</td>
                        <td>${addOn.cost * addOn.count}</td>
                    </tr>
                ))}
                {selectedMeals.map((meal) => (
                    <tr key={meal.id}>
                        <td>{meal.name}</td>
                        <td>${meal.cost}</td>
                        <td>for {numOfPeople} people</td>
                        <td>${meal.cost * numOfPeople}</td>
                    </tr>
                ))}
            </table>
        </>
    );
};

export default DetailsPopUp;
