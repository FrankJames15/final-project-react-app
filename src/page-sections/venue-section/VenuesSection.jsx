import React from "react";
import "./venues-section.css";
import Card from "../../components/card/Card";
const VenuesSection = (props) => {
    const { venues = [], stateSetter = () => {}, totalCost = 0 } = props;

    console.log("venues: ", venues);
    console.log("totalCost: ", totalCost);
    return (
        <div className="venues-section-container">
            <h2>Venue Room Selection</h2>
            <div className="card-container">
                {venues.map((venue) => (
                    <Card
                        key={venue.id}
                        id={venue.id}
                        name={venue.name}
                        capacity={venue.capacity}
                        cost={venue.cost}
                        count={venue.count}
                        stateSetter={stateSetter}
                    />
                ))}
            </div>
            <div className="total-cost-container">Total Cost: ${totalCost}</div>
        </div>
    );
};

export default VenuesSection;
