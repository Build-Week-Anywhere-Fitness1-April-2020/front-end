import React, { useState } from "react";
import axios from "axios";

const CreateClass = (props) => {
  const [createClass, setCreateClass] = useState({
    id: "",
    name: "",
    time: "",
    duration: "",
    intensity: "",
    location: "",
    maxSize: "",
    classType: "",
    imgUrl: "",
    equiptmentRequired: "",
    arrivalDescription: "",
    additionalInfo: "",
    cost: "",
    description: "",
    address: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setCreateClass({
      ...createClass,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    axios
      .post("https://anywherefitness-api.herokuapp.com/classes", createClass)
      .then((res) => {
        setCreateClass({
          id: Date.now(),
          name: "",
          time: "",
          duration: "",
          intensity: "",
          location: "",
          maxSize: "",
          classType: "",
          imgUrl: "",
          equiptmentRequired: "",
          arrivalDescription: "",
          additionalInfo: "",
          cost: "",
          description: "",
          address: "",
          startDate: "",
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <h3>Create class</h3>
      <form onSubmit={submit}>
        <label htmlFor="name">
          Class Name
          <input
            id="name"
            type="text"
            name="name"
            value={createClass.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="description">
          Class description
          <textarea
            id="description"
            name="description"
            value={createClass.description}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="cost">
          Class cost in US dollars
          <input
            id="cost"
            type="text"
            name="cost"
            value={createClass.cost}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="equiptmentRequired">
          Class equipment requirements
          <textarea
            id="equiptmentRequired"
            name="equiptmentRequired"
            value={createClass.equiptmentRequired}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address">
          Class address
          <input
            id="address"
            type="text"
            name="address"
            value={createClass.address}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="classType">
          Class Type
          <select
            id="classType"
            name="classType"
            onChange={handleChange}
            required
          >
            <option value="1">Pilates</option>
            <option value="2">Boxing</option>
            <option value="3">Running</option>
            <option value="4">Lifting</option>
            <option value="5">Hot Yoga</option>
          </select>
        </label>

        <label htmlFor="maxSize">
          Maximum class size
          <input
            id="maxSize"
            type="text"
            name="maxSize"
            value={createClass.maxSize}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="duration">
          Class duration in hours
          <input
            id="duration"
            type="text"
            name="duration"
            value={createClass.duration}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="intensity">
          Class intensity level
          <select
            id="intensity"
            name="intensity"
            onChange={handleChange}
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>

        <label htmlFor="arrivalDescription">
          When you arrive
          <input
            id="arrivalDescription"
            type="text"
            name="arrivalDescription"
            value={createClass.arrivalDescription}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="additionalInfo">
          What you need to know
          <input
            id="additionalInfo"
            type="text"
            name="additionalInfo"
            value={createClass.additionalInfo}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="time">
          Class time
          <input
            id="time"
            type="time"
            name="time"
            value={createClass.time}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="startDate">
          Class date
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={createClass.startDate}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default CreateClass;
