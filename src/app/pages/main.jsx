import React, { useEffect, useState } from 'react';
import Progress from '../components/common/progress';
import { useSelector } from 'react-redux';
import { getIsLoadingStatus, getParticipants } from '../../store/participants';
import Slider from '../components/common/slider';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const Main = () => {
  const isLoading = useSelector(getIsLoadingStatus());
  const participants = useSelector(getParticipants());
  const [photosList, setPhotosList] = useState([]);
  const photosListRef = ref(storage, 'photos/');

  useEffect(() => {
    listAll(photosListRef).then((response) => {
      response.items.forEach((item) => {
        const newName = item._location.path_.replace('photos/', '');
        getDownloadURL(item).then((url) => {
          setPhotosList((prevState) => [
            ...prevState,
            { url: url, photo: newName }
          ]);
        });
      });
    });
  }, []);

  console.log('photosList', photosList);
  

  return (
    <div>
      <h2 className="text-center">Главная страница</h2>
      <Slider />
     
    </div>
  );
};

export default Main;
