import React from 'react'
import "../styles.css"
import { API } from '../backend'
import Base from './Base'


const Homepage = () => {

    console.log("API IS: ",API)

    return (
        <div>
        <Base title="Homepage" description="Welcome to Homepage of Banking System">
        
        </Base>
            
        </div>
    )
}

export default Homepage
