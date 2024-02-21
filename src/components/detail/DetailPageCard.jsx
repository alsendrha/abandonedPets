import React from "react";
import "./DetailPageCard.css";
const DetailPageCard = ({ petDetailData }) => {
  return (
    <div className="detail_container">
      {
        <img
          className="detail_image"
          src={petDetailData.popfile}
          alt="이미지"
        />
      }
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
      <p>{`관련 기관 : ${petDetailData.careNm}`}</p>
      <p>{`보호소 주소 : ${petDetailData.careAddr}`}</p>
      <p>{`보호소 연락처 : ${petDetailData.careTel}`}</p>
      <p>{`발견 날짜 : ${petDetailData.happenDt}`}</p>
      <p>{`발견 장소 : ${petDetailData.happenPlace}`}</p>
      <p>{`종류 : ${petDetailData.kindCd}`}</p>
      <p>{`성별 : ${petDetailData.sexCd === "M" ? "남아" : "여아"}`}</p>
      <p>{`나이 : ${petDetailData.age}`}</p>
      <p>{`몸무게 : ${petDetailData.weight}`}</p>
      <p>{`중성화 여부 : ${petDetailData.neuterYn}`}</p>
      <p>{`현재 상태 : ${petDetailData.processState}`}</p>
      <p>{`공고 시작일 : ${petDetailData.noticeSdt}`}</p>
      <p>{`공고 종료일 : ${petDetailData.noticeEdt}`}</p>
      <p>{`특이사항 : ${petDetailData.specialMark}`}</p>
    </div>
  );
};

export default DetailPageCard;
