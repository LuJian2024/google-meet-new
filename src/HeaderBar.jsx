/* import { MdOutlineSpaceDashboard as DashboardIcon } from "react-icons/md"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faNewspaper as LeftIcon,
    faTableColumns as DashboardIcon,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Confetti from "react-confetti";
import Modal from "react-modal";

import "./App.css";

function HeaderBar() {
    const [showConfetti, setShowConfetti] = useState(false);

    const onClickConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
    };

    function onClickHandler() {
        alert("You have the button clicked!");
    }
    return (
        <>
            <div className="header-container">
                <button className="icon-container" onClick={onClickConfetti}>
                    <FontAwesomeIcon icon={LeftIcon} />
                </button>
                {showConfetti && <Confetti />}
                <div className="bar-container">
                    <button
                        className="icon-container right-icon"
                        onClick={onClickHandler}
                    >
                        <FontAwesomeIcon icon={DashboardIcon} />
                    </button>
                    <p>Breakout rooms are in session</p>
                </div>
            </div>
        </>
    );
}

export default HeaderBar;
