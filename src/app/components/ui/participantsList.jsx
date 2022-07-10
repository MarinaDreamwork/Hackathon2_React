import React from "react";
import { useSelector } from "react-redux";

import { getParticipants } from "../../../store/participants";
import ParticipantCard from "./participantCard";

const ParticipantsList = () => {
  const participants = useSelector(getParticipants());

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {participants &&
          participants.map((participant) => (
            <ParticipantCard key={participant.id} participant={participant} />
          ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
