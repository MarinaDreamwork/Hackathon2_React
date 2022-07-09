import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/common/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoadingStatus, loadParticipantsList } from "../store/participants";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingStatus());

  useEffect(() => {
    if(!isLoading) {
      dispatch(loadParticipantsList());
    }
  }, []);

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
