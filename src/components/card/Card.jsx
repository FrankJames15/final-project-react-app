import React from "react";
import "./card.css";
const Card = (props) => {
    const {
        id = null,
        name = "",
        capacity = 0,
        cost = 0,
        count = 0,
        stateSetter = () => {},
    } = props;

    const handleDecrease = () => {
        stateSetter((prev) => {
            return prev.map((venue) => {
                if (venue.id === id) {
                    return {
                        ...venue,
                        count: venue.count > 0 ? venue.count - 1 : 0,
                    };
                }
                return venue;
            });
        });
    };

    const handleIncrease = () => {
        stateSetter((prev) => {
            return prev.map((venue) => {
                if (venue.id === id) {
                    return { ...venue, count: venue.count + 1 };
                }
                return venue;
            });
        });
    };

    return (
        <div className="card" id={`card-${id}`}>
            <div className="name">{name}</div>
            <div className="capacity">Capacity: {capacity}</div>
            <div className="cost">Cost: ${cost}</div>
            <div className="counter">
                <button className="decrease-btn" onClick={handleDecrease}>
                    -
                </button>
                <span className="count">{count}</span>
                <button className="increase-btn" onClick={handleIncrease}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Card;
