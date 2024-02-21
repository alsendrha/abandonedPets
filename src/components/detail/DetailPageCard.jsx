import React from "react";
import "./DetailPageCard.css";
import DetailPageCardIcon from "./DetailPageCardIcon";
const DetailPageCard = ({ petDetailData }) => {
  return (
    <div className="detail_container">
      <img className="detail_image" src={petDetailData.popfile} alt="이미지" />
      <div className="detail_info_form">
        <DetailPageCardIcon petDetailData={petDetailData} />
        <table>
          <tbody>
            <tr>
              <th>관련기관</th>
              <td>{petDetailData.careNm}</td>
            </tr>
            <tr>
              <th>보호소 주소</th>
              <td>{petDetailData.careAddr}</td>
            </tr>
            <tr>
              <th>보호소 연락처</th>
              <td>{petDetailData.careTel}</td>
            </tr>
            <tr>
              <th>발견 날짜</th>
              <td>{petDetailData.happenDt}</td>
            </tr>
            <tr>
              <th>발견 장소</th>
              <td>{petDetailData.happenPlace}</td>
            </tr>
            <tr>
              <th>종류</th>
              <td>{petDetailData.kindCd}</td>
            </tr>
            <tr>
              <th>성별</th>
              <td>{petDetailData.sexCd === "M" ? "남아" : "여아"}</td>
            </tr>
            <tr>
              <th>나이</th>
              <td>{petDetailData.age}</td>
            </tr>
            <tr>
              <th>몸무게</th>
              <td>{petDetailData.weight}</td>
            </tr>
            <tr>
              <th>중성화 여부</th>
              <td>{petDetailData.neuterYn}</td>
            </tr>
            <tr>
              <th>현재 상태</th>
              <td>{petDetailData.processState}</td>
            </tr>
            <tr>
              <th>공고 시작일</th>
              <td>{petDetailData.noticeSdt}</td>
            </tr>
            <tr>
              <th>공고 종료일</th>
              <td>{petDetailData.noticeEdt}</td>
            </tr>
            {/* <tr>
              <th>특이사항</th>
              <td>{petDetailData.specialMark}</td>
            </tr> */}
          </tbody>
        </table>
        {/* <p>{`관련 기관 : ${petDetailData.careNm}`}</p>
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
        <p>{`특이사항 : ${petDetailData.specialMark}`}</p> */}
      </div>
      <div className="last_detail_info">
        <p>{`특이사항 : ${petDetailData.specialMark}`}</p>
      </div>
    </div>
  );
};

export default DetailPageCard;
