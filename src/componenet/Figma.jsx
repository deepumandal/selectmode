import React from "react";
import Leftmenu from "./Leftmenu";
import Ractangle from "./Ractangle";
import Dashboard from "./Dashboard";
import { MyContex } from "../context/Themecon";
import { useContext } from "react";
import "./style.css";


const Figma = () => {
  const { state, dispatch } = useContext(MyContex);
  return (
    <div className='all' style={{'backgroundColor': state === 'light' ? 'white' : '#1F2327'}}>
      <Leftmenu />
      <Dashboard />
      <Ractangle />
    </div>
  );
};

export default Figma;
