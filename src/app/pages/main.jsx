import React, { useEffect, useState } from "react";
import Progress from "../components/common/progress";
import { useSelector } from "react-redux";
import {
  getIsLoadingStatus,
  getParticipants,
} from "../../store/participants";
import Slider from "../components/common/slider";
import { listAll, ref, getDownloadURL} from "firebase/storage";
import { storage } from "../../firebase";

const Main = () => {
  const isLoading = useSelector(getIsLoadingStatus());
  const participants = useSelector(getParticipants());
  const [photosList, setPhotosList] = useState([]);
  const photosListRef = ref(storage, "photos/");

  useEffect(() => {
    listAll(photosListRef).then((response) => {
      response.items.forEach((item) => {
        const newName = item._location.path_.replace("photos/", "");
        getDownloadURL(item).then(url => {
          setPhotosList((prevState) => [
            ...prevState,
            {url: url,
            photo: newName
          }]);
        });
      });
    });
  }, []);

  console.log("photosList", photosList);
  const [test, setTest] = useState([
    {bgColor: "#00695c", completed: 57, type:  "bar", id: new Date().getMilliseconds() * Math.random(), label: "HTML" }
  ]);
    
  const changeSelect = ({target}) => {
    setTest( [{
      ...test[0], 
      type: target.value
    }] );
  };

  return (
    <div>
      <h2 className="text-center">Главная страница</h2>
      <Slider />
      {
        test.map(i => <Progress changeSelect = {changeSelect} key={i.id} bgColor={i.bgColor} completed={i.completed} label={i.label} type={i.type}/>)
      }
    </div>
  );
};

export default Main;
