import React, { useState } from "react";
import Progress from "../components/common/progress";



const Main = () => {


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
      {
        test.map(i => <Progress changeSelect = {changeSelect} key={i.id} bgColor={i.bgColor} completed={i.completed} label={i.label} type={i.type}/>)
      }
  </div>
  ) ;
};

export default Main;
