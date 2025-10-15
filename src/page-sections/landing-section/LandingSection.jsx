import React from "react";
import "./landing-section.css";

const LandingSection = () => {
    return (
        <section className="landing-section">
            <div className="hero-container">
                <h1>Conference Expense Planner</h1>
                <p>Plan you next major event with us! </p>
                <a href="/main" className="get-started-button">
                    Get Started
                </a>
            </div>

            <div className="description-container">
                <p>
                    Welcome to BudgetEase Soultions, your trusted partner in
                    simplifying budget management and financial solutions. At
                    BudgetEase, we understand the importance of effective budget
                    planning agnd strive to provide intuitive, user-friendly
                    solutions to meet the diverse needs of our clients.
                </p>

                <p>
                    With a commitment to efficiency and innovation, we empower
                    individuals and businesses to take control of their finances
                    and achieve their goals with ease.
                </p>

                <p>
                    At BudgetEase Solutions, our mission is to make budgetting
                    effortles and accessible for everyone. Wheter you’re a small
                    business owner, a busy professional, or an individual
                    looking to manage your personal finances, we offer tailored
                    solutions to streamline your budgeting process.
                </p>
            </div>
        </section>
    );
};

export default LandingSection;
