import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/common/navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataLoadedStatus,
  loadParticipantsList,
} from "../store/participants";
import BreadCrumb from "./components/common/breadcrumbs";
import { getIsLoadingStatus, loadKeySkillsList } from "../store/keySkills";

const App = () => {
  const dispatch = useDispatch();
  const isLoadingData = useSelector(getDataLoadedStatus());
  const isLoadingKeySkills = useSelector(getIsLoadingStatus());

  useEffect(() => {
    if (!isLoadingData && !isLoadingKeySkills) {
      dispatch(loadParticipantsList());
      dispatch(loadKeySkillsList());
    }
  }, []);

  return (
    <>
      <Navbar />
      <BreadCrumb />
      <AppRouter />
    </>
  );
};

export default App;
