import React from "react";
function MenuItem({ image, name, price }) {
    return (
      <div className="menuItem">
        <div 
          className="menuImage" 
          style={{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "200px", 
            height: "200px"
          }} 
        />
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
    );
  }
  
export default MenuItem;