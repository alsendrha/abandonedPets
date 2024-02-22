import axios from "../../api/CityApi";
import petAxios from "../../api/PetApi";
import React, { useEffect, useState } from "react";
import "./MorePets.css";

import PetsMenu from "../pets/PetsSelect";
import PetCard from "../pets/PetCard";

const MorePets = () => {
  const [cityData, setCityData] = useState([]);
  const [cityDataCode, setCityDataCode] = useState(6110000);
  const [petData, setPetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [petKind, setPetKind] = useState("");
  const [page, setPage] = useState(1);

  const getCityData = async () => {
    const response = await axios.get("", {
      params: {
        numOfRows: 20,
      },
    });
    setCityData(response.data.response.body.items.item);
  };

  const getPetData = async () => {
    setIsLoading(true);
    //upkind: 개 : 417000, 고양이 : 422400, 기타 : 429900
    // const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const params = {
      // bgnde: 20200101, // 시작일
      // endde: currentDate, // 마지막일
      numOfRows: 50,
      pageNo: page,
      // upkind: petKind, // 동물의 종류
      upr_cd: cityDataCode, // 시도코드
    };
    if (petKind) {
      params.upkind = petKind;
    }
    const response = await petAxios.get("", {
      params,
    });
    setPetData(response.data.response.body.items.item);
    console.log(response.data.response.body.items.item);
    setIsLoading(false);
  };
  useEffect(() => {
    getCityData();
  }, []);

  useEffect(() => {
    getPetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityDataCode, petKind]);

  return (
    <div>
      <div>
        <div className="select_container">
          <h1>시도별 유기동물 정보</h1>
          <PetsMenu
            cityData={cityData}
            setCityDataCode={setCityDataCode}
            setPetKind={setPetKind}
          />
        </div>
        {isLoading ? (
          <div className="more_loading_container">로딩중...</div>
        ) : (
          <div className="more_pets_container">
            {petData.map((pet, index) => (
              <PetCard pet={pet} key={index} />
            ))}
          </div>
        )}
        <div id="infinity" style={{ height: "10px" }}></div>
      </div>
    </div>
  );
};

export default MorePets;
