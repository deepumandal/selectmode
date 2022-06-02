import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'

export const MyContex = createContext();
let  change =(state,action)=>{
    switch(action){
        case "dark" : {return state = "dark"};
        case "light" : {return state = "light"}
        default: {return state= "light"}
    }
    
} 

export const MyProvider = ({children})=>{
const [state, dispatch] = useReducer(change, "light")
console.log(state)

    return <MyContex.Provider value={{state, dispatch}}>{children} </MyContex.Provider>
}