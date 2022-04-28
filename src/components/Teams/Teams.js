import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Team from '../Team/Team';
import './Teams.css';
const Teams = () => {
    const [teams,setTeams] = useState([]);
    const [cart , setCart] = useState([]);
    const [toggler,setToggler] = useState(false);
    useEffect(()=>{
          fetch('./teacher.JSON')
          .then(res => res.json())
          .then(data => setTeams(data))
    },[]);
    const loadTotalTeamData=data=>{ 

      if(cart.length<4){
        if(cart.length==0){
            const newCart =[...cart,data];
            setCart(newCart);
        }
        else{
            const filter = cart.filter(item=>item.id===data.id);
            if(filter.length==1){
                  alert('sorry not allow more than one time selected');
                setToggler(true);
            }
            else{
                const newCart =[...cart,data];
               setCart(newCart);
               setToggler(false);
            }
        }
      }
      else{
          alert('Do not allow more than four teacher');
      }
    }     

    const deleteData = data =>{
        const filter = cart.filter(item=>item.id!==data.id)
        setCart(filter);
    }
    const clearAllData = data =>{
        setCart([]);
    }
    return (
        <div className="team-members">     
           <div className="team-member">
           {
            //    to search each data using map 
                teams.map(memberData=> <Team 
                key={memberData.key}
                memberData={memberData}
                loadMemberData={loadTotalTeamData}
                toggler={toggler}
                >
                </Team> )
            }
           </div>
           {/* here i show in ui to cart  */}
           <div className="member-cart">
               {
                   <Cart
                   cart={cart}
                   deleteData={deleteData}
                   clearAllData={clearAllData}
                   ></Cart>
               }
           </div>
        </div>
    );
};

export default Teams;