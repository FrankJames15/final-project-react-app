import React from "react";
import "./meals-section.css";

const MealsSection = (props) => {
    const {
        meals = [],
        setMeals = () => {},
        numberOfPeople = 0,
        setNumberOfPeople = () => {},
        totalMealCost = 0,
    } = props;

    const handleNumOfPeopleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumberOfPeople(isNaN(value) ? 0 : value);
    };

    const handleMealToggle = (mealId) => {
        const updatedMeals = meals.map((meal) =>
            meal.id !== mealId ? meal : { ...meal, selected: !meal.selected }
        );
        setMeals(updatedMeals);
    };

    return (
        <section className="meals-section">
            <h2>Meals Selection</h2>
            <div className="people-input">
                <label>
                    Number of People:
                    <input
                        type="number"
                        value={numberOfPeople}
                        onChange={handleNumOfPeopleChange}
                        min="0"
                    />
                </label>
            </div>
            <div className="meals-container">
                {meals.map((meal) => (
                    <div key={meal.id} className="meal-option">
                        <label>
                            <input
                                type="checkbox"
                                checked={meal.selected}
                                onChange={() => handleMealToggle(meal.id)}
                            />
                            {meal.name} (${meal.cost} per person)
                        </label>
                    </div>
                ))}
            </div>
            <div className="total-meal-cost">
                <strong>Total Meal Cost: ${totalMealCost}</strong>
            </div>
        </section>
    );
};

export default MealsSection;
