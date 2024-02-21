import React from "react";
import { useNavigate } from "react-router-dom";
import "./MoreButton.css";

const MoreButton = () => {
  const navigate = useNavigate();

  return (
    <div className="more_button" onClick={() => navigate("more")}>
      <p>더보기 &gt;</p>
    </div>
  );
};

export default MoreButton;
