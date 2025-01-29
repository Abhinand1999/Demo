import React, { useEffect, useState } from 'react';
import './Food.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Food = () => {
  const [foods, setFoods] = useState([]); 
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/menus/');
        setFoods(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/menu/${id}`);
  };

  return (
    <div className="food-container">
      <div className="button-group">
        {foods.map((food,key) => (
          <button key={key} className="menu-button" onClick={() => handleClick(food._id)}>
            {food.menuName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Food;