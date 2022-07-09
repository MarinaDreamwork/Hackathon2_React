
import React, { useState } from "react";
import Progress from "../components/common/progress";
import { useSelector } from "react-redux";
import {
  getIsLoadingStatus,
  getParticipants,
  loadParticipantsList,
} from "../../store/participants";
import Tilt from "react-vanilla-tilt";


const Main = () => {
  // const isLoading = useSelector(getIsLoadingStatus());
  // const participants = useSelector(getParticipants());

    const [test, setTest] = useState([
      {bgColor: "#00695c", completed: 57, type:  "bar", id: new Date().getMilliseconds() * Math.random(), label: "HTML" }
    ]);
    
    const changeSelect = ({target}) => {
      setTest( [{
        ...test[0], 
      type: target.value
    }]);
    };

  return (
  <div>
      <h2 className="text-center">Главная страница</h2>
      <Tilt className='tilt'>
  <div>
    You can put whatever you want inside this
  </div>
</Tilt>
      {
        test.map(i => <Progress changeSelect = {changeSelect} key={i.id} bgColor={i.bgColor} completed={i.completed} label={i.label} type={i.type}/>)
      }
  </div>
  ) ;
};

export default Main;
