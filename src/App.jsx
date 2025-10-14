import { useState, useEffect } from "react";

import Header from "./components/header/Header";
import LandingSection from "./page-sections/landing-section/LandingSection";
import VenuesSection from "./page-sections/venue-section/VenuesSection";

function App() {
    const [venues, setVenues] = useState([
        {
            id: 1,
            name: "Conference Room",
            capacity: 15,
            cost: 1_500,
            count: 0,
        },
        {
            id: 2,
            name: "Audition Hall",
            capacity: 200,
            cost: 5_500,
            count: 0,
        },
        {
            id: 3,
            name: "Presentation Room",
            capacity: 50,
            cost: 3_500,
            count: 0,
        },
        {
            id: 4,
            name: "Large Meeting Room",
            capacity: 10,
            cost: 1_000,
            count: 0,
        },
        {
            id: 5,
            name: "Small Meeting Room",
            capacity: 5,
            cost: 800,
            count: 0,
        },
    ]);

    const [totalVenueCost, setTotalVenueCost] = useState(0);

    const calculateTotalVenueCost = () => {
        return venues.reduce((acc, venue) => acc + venue.cost * venue.count, 0);
    };

    useEffect(() => {
        const newTotal = calculateTotalVenueCost();
        setTotalVenueCost(newTotal);
        console.log("Total Venue Cost: ", newTotal);
    }, [venues]);

    return (
        <>
            <Header />
            <LandingSection />
            <VenuesSection
                venues={venues}
                stateSetter={setVenues}
                totalCost={totalVenueCost}
            />
        </>
    );
}

export default App;
