import React from "react";
import { useNavigate } from "react-router-dom";

const GetRestaurant = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/GetProfile")}></button>
    </div>
  );
};
export default GetRestaurant;
