import React,{useState,useEffect} from 'react';
import '../styles.css'
import Base from '../core/Base'
import { isAutheticated } from '../auth/index'
import { Link } from 'react-router-dom';
import {getAllUsers} from './adminAPIicall.js/helper'

const AdminDB = () => {

  const[users, setUsers] = useState([]);
  const{user:{name, email, role}} = isAutheticated();

  const preload = () =>
  {
    getAllUsers()
    .then(data => {
      if(data.error){
        console.log(data.error)
      }
      else{
        setUsers(data)
      }   
    })
  }

  useEffect(() => {
    preload()
  }, [])

    return(
      <Base
       className="container-fluid p-4"
      >
      <div className="mb-4 ">
      <h4 className="text-center card-header bg-primary">Admin Information</h4>
      <ul className="list-group">
        <li className="text-center list-group-item">
          <span className="txt-center badge badge-primary mr-2">Name:</span> {name}
        </li>
  
        <li className="text-center list-group-item">
          <span className="badge badge-primary mr-2">Email:</span> {email}
        </li>
      
      </ul>
    </div>

    {users.map((user, index)=> {
      return(
        <div className="card">
        <h4 className="card-header bg-primary">Account Holder Info</h4>
          <ul className="list-group">
            <li className="list-group-item">
          <span className="badge badge-primary mr-2">Name:</span>{user.name}
            </li>
            <li className="list-group-item">
          <span className="badge badge-primary mr-2">Mobile:</span>{user.mobile}
            </li>
            <li className="list-group-item">
          <span className="badge badge-primary mr-2">Email:</span>{user.email}
            </li>
            <li className="list-group-item">
          <span className="badge badge-primary mr-2">Available Balance:</span>{user.totalbalance}
            </li>
          </ul>
        </div>
      )
    })
  }
        
      </Base>
    );
}

export default AdminDB;








  
