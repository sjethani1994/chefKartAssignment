import React from "react";
import refrigerator from "../assets/svgRef.svg";
import microwave from "../assets/microwave-icon-9522.png";
import image from "../assets/Mask Group 19@2x.png";
import "../styles/DishItems.css"; // Import the CSS file

function DishItems({ dishes }) {
  return (
    <>
      <div className="card">
        <div className="card-body d-flex flex-row justify-content-start">
          <div className="left-div">
            {/* Header Section */}
            <div className="header d-flex flex-row align-items-center justify-content-start">
              <h5 className="card-title">{dishes.name}</h5>
              <span className="badge bg-success">{dishes.rating}</span>
            </div>

            {/* Equipments and Ingredients Section */}
            <div className="icons d-flex flex-row justify-content-start">
              <div className="equipments d-flex flex-row">
                {dishes.equipments &&
                  dishes.equipments.map((equipment, index) =>
                    equipment === "Refrigerator" ? (
                      <div className="equipment-item" key={index}>
                        <img
                          src={refrigerator}
                          alt="refrigerator"
                          className="equipment-icon"
                          width={"13px"}
                        />
                        <span className="equipment-text">Refrigerator</span>
                      </div>
                    ) : equipment === "Microwave" ? (
                      <div className="equipment-item" key={index}>
                        <img
                          src={microwave}
                          alt="microwave"
                          className="equipment-icon"
                          width={"25px"}
                        />
                        <span className="equipment-text">Microwave</span>
                      </div>
                    ) : null
                  )}
              </div>
              <div className="ingredients">
                <p className="card-text">Ingredients</p>
                <span className="view-list">View list {">"}</span>
              </div>
            </div>

            {/* Description Section */}
            <p className="card-text description">{dishes.description}</p>
          </div>

          {/* Image Section */}
          <div className="right-div">
            <img src={image} alt="Dish" className="dish-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DishItems;
