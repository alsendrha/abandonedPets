import React from "react";
import "./PetsSelect.css";

const PetsSelect = ({ cityData, setCityDataCode, setPetKind }) => {
  const petKindCode = [
    { name: "전체", code: "" },
    { name: "개", code: 417000 },
    { name: "고양이", code: 422400 },
    { name: "기타", code: 429900 },
  ];

  return (
    <div className="select_menu">
      <div>
        <select
          className="select_button"
          onChange={(code) => setCityDataCode(code.target.value)}
        >
          {cityData.map((city, index) => (
            <option className="option" key={index} value={city.orgCd}>
              {city.orgdownNm}
            </option>
          ))}
        </select>
        <select
          className="select_button"
          onChange={(code) => setPetKind(code.target.value)}
        >
          {petKindCode.map((kind, index) => (
            <option key={index} value={kind.code}>
              {kind.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PetsSelect;
