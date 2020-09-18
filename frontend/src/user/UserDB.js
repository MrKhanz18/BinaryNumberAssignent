import React, { useState, useEffect } from "react";
import '../styles.css'
import Base from "../core/Base";
import { isAutheticated } from '../auth/index' 
import { getInfo } from './adminAPIicall.js/helper'


const UserDashBoard = () => {

  const [info, setInfo] = useState([])

  const { user } = isAutheticated();

  const preload = () => {
    getInfo(user._id)
    .then(data => {
      if(data.error){
        console.log(data.error);
      }
      else{
        setInfo(data)
      }
    })

  }
  useEffect(() => {
    preload()
  }, [])

  return (
    <Base
       className="container-fluid"
      >
      <div className="mb-4 ">
      <h4 className="text-center card-header bg-primary text-white">Account Holder Details</h4>
      <ul className="list-group">
        <li className="text-center list-group-item">
          <span className="txt-center badge badge-primary mr-2">Name</span>{info.name}
        </li>
  
        <li className="text-center list-group-item">
          <span className="badge badge-primary mr-2">Email</span>{info.email}
        </li>

        <li className="text-center list-group-item">
          <span className="badge badge-primary mr-2">Mobile</span>{info.mobile}
        </li>
        <li className="text-center list-group-item">
          <span className="badge badge-primary mr-2">Available Balance</span>{info.totalbalance}
        </li>

        <li className="list-group-item">
          <button className="btn btn-danger btn2">WITHDRAWL</button>
          <button className="btn btn-success btnn">DEPOSIT</button>
        </li>

          

      </ul>
      
      

    </div>

   
        
      </Base>
  );
};

export default UserDashBoard;
