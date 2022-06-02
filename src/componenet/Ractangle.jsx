import React from 'react'
import './style.css'



const Ractangle = () => {
  let data = [{name :" Nrupul Dev", place: "Banglore,india", level:"Profetional level 15",points: "4723Points"},
  {name :" Nrupul Dev", place: "Banglore,india", level:"Profetional level 15",points: "4723Points"},
  {name :" Nrupul Dev", place: "Banglore,india", level:"Profetional level 15",points: "4723Points"}]
  return (
    <div className='ract'>
<div className='user'> 
<h4> Active Users</h4>
<p> for August 2020  </p>
</div>
<div className='userbottom'>
 {/* {data.map(e=>{
   return <div className="avtar">
     <p className='name'>{e.name} </p>
     <p className='place'>{ e.place} </p>
    <div className='understand'> 
    <p className='level'>{e.level} </p>
     <p className='points'> {e.points} </p>
    </div>
   </div>
 })} */}
</div>






    </div>
  )
}

export default Ractangle