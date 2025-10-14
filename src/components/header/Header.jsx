import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <h1>Conference Expense Planner</h1>
            <nav>
                <a href="#venue">Venue</a>
                <a href="#add-ons">Add-ons</a>
                <a href="#meals">Meals</a>
            </nav>
            <button>Show Details</button>
        </header>
    );
};

export default Header;
