import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import './team.css';
const Team = (props) => {
   
    const { name, picture, profession, fee, age, city, country, versity } = props.memberData;
    return (
        // here i show all data in ui 
        <div className="memberDetails">
            <img src={picture} alt="loading..." />
            <h2>Name : <small>{name}</small> </h2>
            <h3>Age : <small>{age}</small></h3>
            <h3>profession : <small>{profession}</small></h3>
            <h3> job institute : <small>{versity}</small> </h3>
            <h3>Fee : <small>{fee}</small></h3>
            <h3>Live in : <small>{city} , {country}</small></h3>

            {/* by clicking data it can show single data to each item  */}
         
            <button className="user-btn" onClick={() => props.loadMemberData(props.memberData)}> 
                <i class="fas fa-user-tie"></i>  Hire Me</button>
            <div className="social-icon">
                <i className="fab fa-facebook-square fa-3x"></i>
                <i className="fab fa-linkedin fa-3x"></i>
            </div>

        </div>
    );
};

export default Team;