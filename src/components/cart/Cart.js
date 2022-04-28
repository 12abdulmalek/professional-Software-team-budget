import React from 'react';
// import { findAllInRenderedTree } from 'react-dom/test-utils';
import Person from '../PERSON/Person';
// here cart accept StyleSheet 
import './cart.css';
const Cart = (props) => {
    const cartLength = props.cart.length;
    const reducer = (previous,current)=>previous+current.fee;
    const totalFee=props.cart.reduce(reducer,0);
    const deleteData = data =>{
      props.deleteData(data);
    }
    
    return (
        <div>
          <div className="cart">
            {/* show total fee and how many item select  */}
          <h1>Invited Guest Added : {cartLength}</h1>
             <h1>Total Guest Cost : ${totalFee}</h1>
             <button className="cart-button" onClick={()=>props.clearAllData()}>clear all</button>
          </div>
                 {/* send single product when user click the add guest button */}
             {
                 props.cart.map((item,index) => <Person 
                  key={index}
                    item={item}
                   deleteData={deleteData}
                    >
                    </Person>)
             }
             
        </div>
    );
};

export default Cart;