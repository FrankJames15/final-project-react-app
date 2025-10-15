import React from "react";
import "./Header.css";

const Header = (props) => {
    const { popupToggle = () => {} } = props;

    const handlePopupToggle = () => {
        popupToggle((prev) => !prev);
    };

    return (
        <header>
            <a href="/">
                <h1>Conference Expense Planner</h1>
            </a>
            <nav>
                <a href="#venue">Venue</a>
                <a href="#add-ons">Add-ons</a>
                <a href="#meals">Meals</a>
            </nav>
            <button onClick={handlePopupToggle}>Show Details</button>
        </header>
    );
};

export default Header;
