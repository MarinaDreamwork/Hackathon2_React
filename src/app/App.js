import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/common/navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataLoadedStatus,
  loadParticipantsList,
} from "../store/participants";
import BreadCrumb from "./components/common/breadcrumbs";

const App = () => {
  const dispatch = useDispatch();
  const isLoadingData = useSelector(getDataLoadedStatus());

  useEffect(() => {
    if (!isLoadingData) {
      dispatch(loadParticipantsList());
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
