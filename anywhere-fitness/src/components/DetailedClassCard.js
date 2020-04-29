import React from "react";

const DetailedClasses = (props) => {
  return (
    <div className="classDetails">
      <h2>{props.data.name}</h2>
      <div>
        <p>Time: {props.data.time}</p>
      </div>
      <div>
        <p>Class Description: {props.data.description}</p>
      </div>
      <div>
        <p>Location: {props.data.address}</p>
      </div>
      <div>
        <p>Class starting: {props.data.startDate}</p>
      </div>
      <div>
        <p>Cost of class: {props.data.cost}</p>
      </div>
      <div>
        <p>Duration: {props.data.duration}</p>
      </div>
      <div>
        <p>Fitness level: {props.data.intensity}</p>
      </div>
      <div>
        <p>Class capacity: {props.data.maxSize}</p>
      </div>
      <div>
        <p>Equipment needed: {props.data.equiptmentRequired}</p>
      </div>
      <div>
        <p>Upon arrival: {props.data.arrivalDescription}</p>
      </div>
      <div>
        <p>Additional Info: {props.data.additionalInfo}</p>
      </div>
    </div>
  );
};
export default DetailedClasses;
