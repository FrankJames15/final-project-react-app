import React from "react";
import "./add-ons.css";
import Card from "../../components/card/Card";
const AddOns = (props) => {
    const { addOns = [], stateSetter = () => {}, addOnsTotalCost = 0 } = props;

    return (
        <div className="add-ons-section-container" id="add-ons">
            <h2>Add-Ons Selection</h2>
            <div className="card-container">
                {addOns.map((addOn) => (
                    <Card
                        key={addOn.id}
                        id={addOn.id}
                        name={addOn.name}
                        cost={addOn.cost}
                        count={addOn.count}
                        stateSetter={stateSetter}
                        imagePath={addOn.imagePath}
                    />
                ))}
            </div>
            <div className="total-addons-cost">
                Total Cost: ${addOnsTotalCost}
            </div>
        </div>
    );
};

export default AddOns;
