import React from "react";
import { useSelector } from "react-redux";
import {
  getIsLoadingStatus,
  getParticipants,
  loadParticipantsList,
} from "../../store/participants";
import Slider from "../components/common/slider";

const Main = () => {
  const isLoading = useSelector(getIsLoadingStatus());
  const participants = useSelector(getParticipants());

  return (
    <>
      <h2 className="text-center">Главная страница</h2>
      <Slider />
      {/* вывод участников {!isLoading &&
      participants.map((p, i) => <><p key={i}>{p.name}</p></>)} */}
    </>
  );
};

export default Main;
