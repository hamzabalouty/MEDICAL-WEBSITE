import React from "react";
import "./Counter.css";
import { BiSolidLike } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { FaGraduationCap, FaAmbulance } from "react-icons/fa";
import CountUp, { useCountUp } from "react-countup";
import { Odometer } from "odometer_countup";

const Counter = () => {
  useCountUp({
    ref: "counter1",
    end: 3670,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  useCountUp({
    ref: "counter2",
    end: 36,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  useCountUp({
    ref: "counter3",
    end: 27,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  useCountUp({
    ref: "counter4",
    end: 14,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  return (
    <div className="counter">
      <div className="counter-container">
        <div className="counter-details">
          <BiSolidLike className="counter-icon" />
          <h2 id="counter1"></h2>
          <p>Satisfied Patients</p>
        </div>
        <div className="counter-details">
          <IoPerson className="counter-icon" />
          <h2 id="counter2"></h2>
          <p>Nurses</p>
        </div>
        <div className="counter-details">
          <FaGraduationCap className="counter-icon" />
          <h2 id="counter3"></h2>
          <p>Brilliant Doctors</p>
        </div>
        <div className="counter-details">
          <FaAmbulance className="counter-icon" />
          <h2 id="counter4"></h2>
          <p>Ambulances</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
