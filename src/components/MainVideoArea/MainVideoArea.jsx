// import { useState, useEffect } from "react";
import ParticipantSquare from "./ParticipantSquare";
import participants from "../../participants.js";
import "./MainVideoArea.css";

const MainVideoArea = () => {
    /*const [selectedParticipant, setSelectedParticipant] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * participants.length);
            setSelectedParticipant(randomIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, []); */

    return (
        <div className="main-video-area">
            {participants.map((participant, index) => (
                <ParticipantSquare
                    key={index}
                    name={participant.name}
                    photo={participant.photo}
                    /* style={{
                        borderColor:
                            index === selectedParticipant ? "blue" : "initial",
                    }} */
                />
            ))}
        </div>
    );
};

export default MainVideoArea;
