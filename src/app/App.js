import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/common/navbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDataLoadedStatus,
  getParticipants,
  loadParticipantsList,
} from '../store/participants';
import BreadCrumb from './components/common/breadcrumbs';
import { getIsKeyLoadingStatus, loadKeySkillsList } from '../store/keySkills';
import { getIsLoadingTechStatus, loadTechnologiesList } from '../store/technologies';
import Preloader from './components/common/preloader';

const App = () => {
  const dispatch = useDispatch();
  const isLoadingData = useSelector(getDataLoadedStatus());
  const isLoadingKeySkills = useSelector(getIsKeyLoadingStatus());
  const isLoadingTech = useSelector(getIsLoadingTechStatus());

  useEffect(() => {
    if (!isLoadingData && !isLoadingKeySkills && !isLoadingTech) {
      dispatch(loadParticipantsList());
      dispatch(loadKeySkillsList());
      dispatch(loadTechnologiesList());
    }
  }, []);

  if(isLoadingData && isLoadingKeySkills && isLoadingTech) {
    return <Preloader color='warning' text='Загружаю приложение'/>;
  } else {

  return (
    <>
      <Navbar />
      <BreadCrumb />
      <AppRouter />
    </>
  );
  };
};

export default App;
