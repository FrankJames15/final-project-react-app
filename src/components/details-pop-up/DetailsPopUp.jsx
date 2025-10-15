import React from "react";
import "./details-pop-up.css";
const DetailsPopUp = (props) => {
    const {
        totalCost = 0,
        selectedVenues = [],
        selectedAddOns = [],
        selectedMeals = [],
        numOfPeople = 0,

        popupToggle = () => {},
    } = props;

    const handleClose = () => {
        popupToggle((prev) => !prev);
    };

    return (
        <div className="details-pop-up-container">
            <button className="close-button" onClick={handleClose}>
                <span>&times;</span>
            </button>
            <div>Total Cost for the Event</div>
            <h1>${totalCost}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Unit Cost</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    );
};

export default DetailsPopUp;
