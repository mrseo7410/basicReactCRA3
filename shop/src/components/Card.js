import React from "react";
import {useState, useContext  } from "react";
import {Link} from "react-router-dom";
import { 재고context } from "../App";

 

function Card(props) {
    const {shoes,i} = props;
    let 재고 = useContext(재고context);
    return (

      <div className="col-md-4">
        <a href={"/detail/" +(i)}>
        <img

          src={"./shoes" + (i + 1) + ".jpg"} width="100%"

        />
        </a>
        <h4>{shoes.title}</h4>

        <p>{shoes.content} & {shoes.price}</p>
        <Test i={i}></Test>


      </div>

    )

  }

 

  export default Card;

  function Test(props){
    let 재고 = useContext(재고context);
    return <div>재고: {재고[props.i]}</div>
  }