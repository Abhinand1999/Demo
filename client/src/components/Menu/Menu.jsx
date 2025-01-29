import React, { useEffect, useState } from 'react';
import './Menu.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Menu = () => {
    const { id } = useParams();
    console.log("hello",id)
    const [menuitem,setMenuitem]=useState([])
    const [menu,setMenu]=useState({}) 
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/menu-items/${id}`);
                const menurespose=await axios.get(`http://localhost:3001/api/menus/${id}`);
                setMenuitem(response.data); 
                setMenu(menurespose.data[0])
              console.log(menurespose)
            
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    },[id])
console.log("hhhhh",menu)
    return (
        <div>
    <div className='menu-body'>
      <div className="menu-body-container">
        <div className="menu-body-header">
          <h4>{menu.menuName}</h4>
          <h2>{menu.description}</h2>
        </div>
        <div className='i'>
          {menuitem.map((item) => (
            <div key={item.id} className="menu-item">
              <div className='menu-item-name-price'>
                <h3 className="menu-item-name">{item.itemName}  ...................................................</h3>
                <h3 className="menu-item-price">${item.price}</h3>
              </div>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
        

    );
};

export default Menu;