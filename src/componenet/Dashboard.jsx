import React from "react";
import { MyContex } from "../context/Themecon";
import { useContext } from "react";

import "./style.css";

const Dashboard = () => {
  const { state, dispatch } = useContext(MyContex);
  return (
    <div className="header">
      <div className="dash">Dashboard</div>
      <div className="switch">
        <p>Dark mode</p>

        
{
 state=="dark"?  <div className="slider2">
 <div
   onClick={() => {
         
       return dispatch("light");
     
   }}
   className="tap2"
 ></div>


</div>
:  <div className="slider">
<div
  onClick={() => {
   
      return dispatch("dark");
     
  }}
  className="tap"
></div>


</div>

}

      </div>
    </div>
  );
};

export default Dashboard;
