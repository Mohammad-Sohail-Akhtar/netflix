import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const App = () => (
    <>
  <h1 className="heading_title">Top 5 Netflix Series of 2023.</h1>
  {Sdata.map((val,index) =>{
   console.log(index);
    return(
   <Card
   key = {val.id}
   imgsrc = {val.imgsrc}
  title = {val.title}
  sname = {val.sname}
  link = {val.link}
  />

  );
 })}

{/* {favseries === "netflix"? <Netflix/> : <Amazon/>} */}
 </>
);

export default App;
