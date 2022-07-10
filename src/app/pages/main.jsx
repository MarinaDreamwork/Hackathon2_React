import React from "react";
import { useSelector } from "react-redux";
import {
  getIsLoadingStatus,
  getParticipants,
  loadParticipantsList
} from "../../store/participants";
import ParticipantsList from "../components/ui/participantsList";

const Main = () => {
  const isLoading = useSelector(getIsLoadingStatus());
  const participants = useSelector(getParticipants());

  return (
    <>
      <h2 className="text-center">Главная страница</h2>
      <ParticipantsList />
    </>
  );
};

export default Main;
