import React from "react";
import { useSelector } from "react-redux";
import {
  getIsLoadingStatus,
  getParticipants,
  loadParticipantsList,
} from "../../store/participants";

const Main = () => {
  const isLoading = useSelector(getIsLoadingStatus());
  const participants = useSelector(getParticipants());

  return (
    <>
      <h2 className="text-center">Главная страница</h2>
    </>
  );
};

export default Main;
