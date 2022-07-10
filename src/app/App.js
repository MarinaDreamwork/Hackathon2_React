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
import { getIsLoadingTechStatus, getTechnologies, loadTechnologiesList } from "../store/technologies";

const App = () => {
  const dispatch = useDispatch();
  const isLoadingData = useSelector(getDataLoadedStatus());
  const isLoadingKeySkills = useSelector(getIsLoadingStatus());
  const isLoadingTech = useSelector(getIsLoadingStatus());

  useEffect(() => {
    if (!isLoadingData && !isLoadingKeySkills &&!isLoadingTech) {
      dispatch(loadParticipantsList());
      dispatch(loadKeySkillsList());
      dispatch(loadTechnologiesList());
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
