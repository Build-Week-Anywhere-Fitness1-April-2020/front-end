import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Classes from "./Classes";

const ClassList = (props) => {
    const [class , setClass] = useState();
    const { id } = useParams();
  
    useEffect(() => {
      axios
        .get(`https://anywherefitness-api.herokuapp.com/classes/${id}`)
        .then((response) => {
          setClass(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);

    return (
      <div>
        <Classes class={class} />
      </div>
    );
  };
  
  export default Movie;