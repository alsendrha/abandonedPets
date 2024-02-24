import React, { useEffect, useRef, useState } from "react";
import axios from "../../api/CityApi";
import petAxios from "../../api/PetApi";
import "./MorePets.css";

import PetCard from "../pets/PetCard";
import PetsMenu from "../pets/PetsSelect";

const MorePets = () => {
  const [cityData, setCityData] = useState([]);
  const [cityDataCode, setCityDataCode] = useState(6110000);
  const [petData, setPetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [petKind, setPetKind] = useState("");
  const [page, setPage] = useState(1);
  const [hashMore, setHashMore] = useState(true);
  const divElement = useRef(null);

  const getCityData = async () => {
    const response = await axios.get("", {
      params: {
        numOfRows: 20,
      },
    });
    setCityData(response.data.response.body.items.item);
  };

  const interception = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      getPetData();
    }
  };

  console.log(
    "펫 코드",
    petKind === "417000"
      ? "개"
      : petKind === "422400"
      ? "고양이"
      : petKind === "429900"
      ? "기타"
      : "전체"
  );
  console.log("시도코드", cityDataCode);

  const getPetData = async () => {
    setIsLoading(true);
    // const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const params = {
      // bgnde: 20200101, // 시작일
      // endde: currentDate, // 마지막일
      numOfRows: 50,
      pageNo: page,
      upr_cd: cityDataCode, // 시도코드
    };
    console.log("펫함수 1번");
    if (petKind) {
      params.upkind = petKind;
    }
    const response = await petAxios.get("", {
      params,
    });
    console.log("펫함수 2번");
    if (!response.data.response.body.items.item) {
      setHashMore(false);
      console.log("펫함수 3번");
    } else {
      console.log("펫함수 4번");
      setPetData((prev) => [
        ...prev,
        ...response.data.response.body.items.item,
      ]);
      setPage((prev) => prev + 1);
      console.log(response.data.response.body.items.item);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCityData();
  }, []);

  useEffect(() => {
    setPage(1); // 페이지를 초기화
    setPetData([]); // 펫 데이터 초기화
    setHashMore(true); // hashMore 상태 초기화
    getPetData(); // 새로운 펫 데이터 불러오기
  }, [petKind, cityDataCode]);

  useEffect(() => {
    const interceptor = new IntersectionObserver(interception);
    if (interceptor) {
      interceptor.observe(divElement.current);
    }
    return () => {
      interceptor.disconnect();
    };
  }, [page, petData, petKind, cityDataCode]);

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
        <div className="more_pets_container">
          {petData.map((pet, index) => (
            <PetCard pet={pet} key={index} />
          ))}
        </div>

        {!hashMore && <div>더이상 데이터가 없습니다.</div>}
        <div
          ref={divElement}
          style={{
            height: "10px",
            backgroundColor: !hashMore ? "blue" : "red",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MorePets;
