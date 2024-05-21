import React from "react";
import Headings from "./Headings";
import Image from "./Image";

function Card(props){
    // console.log(props);
    return (
    <>
      <div className="cards">
        <div className="card">
          <Image imgsrc = {props.imgsrc}/>
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <Headings sname= {props.sname}/>
            <a href= {props.link}  target="_blank ">
            <button>Watch Now</button> 
            </a>
          </div>
        </div>
      </div>
    </>
    );
  }


  export default Card;