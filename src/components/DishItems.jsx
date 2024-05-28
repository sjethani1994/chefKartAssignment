import React from "react";
import refrigerator from "../assest/svgRef.svg";
import microwave from "../assest/microwave-icon-9522.png";
function DishItems({ dishes }) {
  console.log(dishes);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{dishes.name}</h5>
          <p className="card-text">{dishes.description}</p>
          <div className="icons flex">
            {dishes.equipments &&
              dishes.equipments.map((equipment, index) =>
                equipment === "Refrigerator" ? (
                    <div>
                    <img
                    key={index} // Adding a unique key
                    src={refrigerator}
                    alt="refrigerator"
                    width={"13px"}
                    style={{ margin: "10px" }}
                  />
                  <span>"Refrigerator"</span>
                    </div>
                ) : equipment === "Microwave" ? (
                  <img
                    key={index} // Adding a unique key
                    src={microwave}
                    alt="microwave"
                    width={"25px"}
                    style={{ margin: "10px" }}
                  />
                ) : null
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DishItems;
