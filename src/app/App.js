import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/common/navbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDataLoadedStatus,
  getParticipants,
  loadParticipantsList
} from '../store/participants';
import BreadCrumb from './components/common/breadcrumbs';
import { getIsLoadingStatus, loadKeySkillsList } from '../store/keySkills';
import {
  getIsLoadingTechStatus,
  getTechnologies,
  loadTechnologiesList
} from '../store/technologies';

const App = () => {
  const dispatch = useDispatch();
  const isLoadingData = useSelector(getDataLoadedStatus());
  const isLoadingKeySkills = useSelector(getIsLoadingStatus());
  const isLoadingTech = useSelector(getIsLoadingStatus());

  const participants = useSelector(getParticipants());

  useEffect(() => {
    if (!isLoadingData && !isLoadingKeySkills && !isLoadingTech) {
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
      {/* {
        participants.map( i => (
          <div key={i.id}>
            <p>{i.name}</p>
          </div>
        ))
      } */}
    </>
  );
};

export default App;
