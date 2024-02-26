import React from "react";
import { useNavigate } from "react-router-dom";
import "./MoreButton.css";

const MoreButton = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div className="more_button" onClick={() => navigate(`more/${id}`)}>
      <p>더보기 &gt;</p>
    </div>
  );
};

export default MoreButton;
