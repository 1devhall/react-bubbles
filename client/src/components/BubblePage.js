import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    getData();
  },[]);
  const getData=()=>{
    axiosWithAuth().get('api/colors')
      .then(response=>{
          setColorList(
              response.data.map(item=>item)
          );
      })
      .catch(error=>{
          console.log('errors', error);
      }) 
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
