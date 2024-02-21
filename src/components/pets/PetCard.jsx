import React from "react";
import "./PetCard.css";
import { useNavigate } from "react-router-dom";

const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  return (
    <div
      className="pets_info_container"
      onClick={() =>
        navigate("/detail", {
          state: { pet },
        })
      }
    >
      <p>{pet.kindCd}</p>
      <div>
        <img className="pet_img" src={pet.popfile !== undefined ? pet.popfile : '/images/no_image.png'} alt="사진" />
      </div>
      <p>{pet.age}</p>
      <p>{pet.sexCd === "M" ? "남아" : "여아"}</p>
      <p>{pet.processState}</p>
    </div>
  );
};

export default PetCard;
