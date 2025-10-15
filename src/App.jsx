import { useState, useEffect } from "react";

import Header from "./components/header/Header";
import LandingSection from "./page-sections/landing-section/LandingSection";
import VenuesSection from "./page-sections/venue-section/VenuesSection";
import AddOns from "./page-sections/add-ons/AddOns";
import MealsSection from "./page-sections/meals/MealsSection";
import DetailsPopUp from "./components/details-pop-up/DetailsPopUp";

function App() {
    const path = window.location.pathname;

    const [venues, setVenues] = useState([
        {
            id: 1,
            name: "Conference Room",
            capacity: 15,
            cost: 1_500,
            count: 0,
            imagePath: new URL(
                "./assets/venues-images/conference-room.png",
                import.meta.url
            ).href,
        },
        {
            id: 2,
            name: "Auditorium Hall",
            capacity: 200,
            cost: 5_500,
            count: 0,
            imagePath: new URL(
                "./assets/venues-images/auditorium-hall.png",
                import.meta.url
            ).href,
        },
        {
            id: 3,
            name: "Presentation Room",
            capacity: 50,
            cost: 3_500,
            count: 0,
            imagePath: new URL(
                "./assets/venues-images/presentation-room.png",
                import.meta.url
            ).href,
        },
        {
            id: 4,
            name: "Large Meeting Room",
            capacity: 10,
            cost: 1_000,
            count: 0,
            imagePath: new URL(
                "./assets/venues-images/large-meeting-room.png",
                import.meta.url
            ).href,
        },
        {
            id: 5,
            name: "Small Meeting Room",
            capacity: 5,
            cost: 800,
            count: 0,
            imagePath: new URL(
                "./assets/venues-images/small-meeting-room.png",
                import.meta.url
            ).href,
        },
    ]);

    const [addOns, setAddOns] = useState([
        {
            id: 1,
            name: "Projectors",
            cost: 200,
            count: 0,
            imagePath: new URL(
                "./assets/add-ons-images/projector.png",
                import.meta.url
            ).href,
        },
        {
            id: 2,
            name: "Speaker",
            cost: 35,
            count: 0,
            imagePath: new URL(
                "./assets/add-ons-images/speaker.png",
                import.meta.url
            ).href,
        },
        {
            id: 3,
            name: "Microphones",
            cost: 45,
            count: 0,
            imagePath: new URL(
                "./assets/add-ons-images/microphone.png",
                import.meta.url
            ).href,
        },
        {
            id: 4,
            name: "Whiteboards",
            cost: 80,
            count: 0,
            imagePath: new URL(
                "./assets/add-ons-images/whiteboard.png",
                import.meta.url
            ).href,
        },
        {
            id: 5,
            name: "Signage",
            cost: 80,
            count: 0,
            imagePath: new URL(
                "./assets/add-ons-images/signage.png",
                import.meta.url
            ).href,
        },
    ]);

    const [meals, setMeals] = useState([
        {
            id: 1,
            name: "Breakfast",
            cost: 50,
            selected: false,
        },
        {
            id: 2,
            name: "High Tea",
            cost: 25,
            selected: false,
        },
        {
            id: 3,
            name: "Lunch",
            cost: 65,
            selected: false,
        },
        {
            id: 4,
            name: "Dinner",
            cost: 70,
            selected: false,
        },
    ]);

    const [numberOfPeople, setNumberOfPeople] = useState(0);

    // State for total costs
    const [totalVenueCost, setTotalVenueCost] = useState(0);
    const [totalAddOnsCost, setTotalAddOnsCost] = useState(0);
    const [totalMealCost, setTotalMealCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const [isDetailsPopUpVisible, setIsDetailsPopUpVisible] = useState(false);

    // selected items
    const selectedVenues = venues.filter((venue) => venue.count > 0);
    const selectedAddOns = addOns.filter((addOn) => addOn.count > 0);
    const selectedMeals = meals.filter((meal) => meal.selected);

    const calculateTotalVenueCost = () => {
        return venues.reduce((acc, venue) => acc + venue.cost * venue.count, 0);
    };
    const calculateTotalAddOnsCost = () => {
        return addOns.reduce((acc, addOn) => acc + addOn.cost * addOn.count, 0);
    };

    const calculateTotalMealCost = () => {
        const selectedMeals = meals.filter((meal) => meal.selected);
        return selectedMeals.reduce(
            (acc, meal) => acc + meal.cost * numberOfPeople,
            0
        );
    };

    useEffect(() => {
        const newTotal = calculateTotalVenueCost();
        setTotalVenueCost(newTotal);
    }, [venues]);

    useEffect(() => {
        const newTotal = calculateTotalAddOnsCost();
        setTotalAddOnsCost(newTotal);
    }, [addOns]);

    useEffect(() => {
        const newTotal = calculateTotalMealCost();
        setTotalMealCost(newTotal);
    }, [meals, numberOfPeople]);

    useEffect(() => {
        setTotalCost(totalVenueCost + totalAddOnsCost + totalMealCost);
    }, [totalVenueCost, totalAddOnsCost, totalMealCost]);

    if (path === "/") {
        return <LandingSection />;
    }
    if (path === "/main")
        return (
            <>
                <Header popupToggle={setIsDetailsPopUpVisible} />
                <VenuesSection
                    venues={venues}
                    stateSetter={setVenues}
                    totalCost={totalVenueCost}
                />
                <AddOns
                    addOns={addOns}
                    stateSetter={setAddOns}
                    addOnsTotalCost={totalAddOnsCost}
                />
                <MealsSection
                    meals={meals}
                    setMeals={setMeals}
                    numberOfPeople={numberOfPeople}
                    setNumberOfPeople={setNumberOfPeople}
                    totalMealCost={totalMealCost}
                />

                {/* details pop up */}
                {isDetailsPopUpVisible && (
                    <DetailsPopUp
                        // selected items
                        totalCost={totalCost}
                        selectedVenues={selectedVenues}
                        selectedAddOns={selectedAddOns}
                        selectedMeals={selectedMeals}
                        numOfPeople={numberOfPeople}
                        popupToggle={setIsDetailsPopUpVisible}
                    />
                )}
            </>
        );
}

export default App;
