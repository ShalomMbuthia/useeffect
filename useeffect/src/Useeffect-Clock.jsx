import React, {useState, useEffect }  from "react";

function DigitalClock(){

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    },1000);

    return () => {
      clearInterval(intervalid);
    }
  }, []);

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridien = hours >=12 ? "pm" : "am";

    hours = hours % 12 || 12;

    return  `${padZero(hours)} : ${padZero(minutes)} :${padZero(seconds)} : ${padZero(meridien)}`;

  }
  function padZero(number){
    return (number < 10 ? "0" : "") + number;

  }


  return(
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>


  );
}

export default DigitalClock;
 