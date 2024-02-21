import React from "react";
import "./DetailPageCardIcon.css";

const DetailPageCardIcon = ({ petDetailData }) => {
  return (
    <div className="image_container">
      <div
        className="detail_image_form"
        style={{
          transform: `${
            petDetailData.kindCd.includes("개") ? "scale(1.1)" : null
          }`,
          boxShadow: `${
            petDetailData.kindCd.includes("개")
              ? "0 5px 5px 0 rgba(0, 0, 0, 0.5)"
              : null
          }`,
        }}
      >
        <img
          className="pet_detail_image_icon"
          src="/images/dog_img.png"
          alt="개 이미지"
        />
      </div>
      <div
        className="detail_image_form"
        style={{
          transform: `${
            petDetailData.kindCd.includes("고양이") ? "scale(1.1)" : null
          }`,
          boxShadow: `${
            petDetailData.kindCd.includes("고양이")
              ? "0 5px 5px 0 rgba(0, 0, 0, 0.5)"
              : null
          }`,
        }}
      >
        <img
          className="pet_detail_image_icon_cet"
          src="/images/cet_img.png"
          alt="고양이 이미지"
        />
      </div>
      <div
        className="detail_image_form"
        style={{
          transform: `${
            petDetailData.kindCd.includes("기타축종") ? "scale(1.1)" : null
          }`,
          boxShadow: `${
            petDetailData.kindCd.includes("기타축종")
              ? "0 5px 5px 0 rgba(0, 0, 0, 0.5)"
              : null
          }`,
        }}
      >
        <img
          className="pet_detail_image_icon"
          src="/images/etc_img.png"
          alt="기타 이미지"
        />
      </div>
    </div>
  );
};

export default DetailPageCardIcon;
