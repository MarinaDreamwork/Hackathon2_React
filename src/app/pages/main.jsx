
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
  <>
      <h2 className="text-center">Главная страница</h2>
     {/* {!isLoading &&
      participants.map((p, i) => <p key={i}>{p.name}</p>)} */}
    </>
  );
};

export default Main;
