import React from 'react';
import './person.css';
const Person = (props) => {
    const {name,picture}=props.item;
   
    return (
        <div>
          {/* single person show showing his/her img or name  */}
              <div className="personal-data">
              <img  src={picture} alt="" />
            <h2>{name}</h2>
          
            <button className='deleted-btn' onClick={()=>props.deleteData(props.item)}>  <i className="fas fa-times fa-2x icon" ></i></button>
              </div>

             
          
        </div>
    );
};

export default Person;

