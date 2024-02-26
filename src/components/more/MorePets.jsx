import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/CityApi";
import petAxios from "../../api/PetApi";
import PetCard from "../pets/PetCard";
import PetsSelect from "../pets/PetsSelect";
import { PetsSelectContext } from "../pets/PetsSelectContext";
import "./MorePets.css";

const MorePets = () => {
  const [cityData, setCityData] = useState([]);
  const [cityDataCode, setCityDataCode] = useState(6110000);
  const [petData, setPetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [petKind, setPetKind] = useState("");
  const [page, setPage] = useState(1);
  const [hashMore, setHashMore] = useState(true);
  const divElement = useRef(null);
  const petCode = useContext(PetsSelectContext);
  const petId = useParams();

  console.log("아이디 : ", petId.id === "1" ? "앙 기모띠" : "안녕하세요");

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

  const getPetData = async () => {
    setIsLoading(true);
    // const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const params = {
      numOfRows: 50,
      pageNo: page,
      upr_cd: cityDataCode,
      // upkind: petCode.petsCode,
      upkind: petId.id === "1" ? 417000 : petId.id === "2" ? 422400 : 429900,
    };
    console.log("펫함수 1번");
    const response = await petAxios.get("", {
      params,
    });
    console.log("펫함수 2번");
    console.log("과연 비어있나요?!", response.data.response.body);
    if (
      !response.data.response.body.items.item ||
      response.data.response.body.items.item.length === 0
    ) {
      setHashMore(false);
      console.log("펫함수 3번");
    } else {
      console.log("펫함수 4번");
      setPetData((prev) => [
        ...prev,
        ...response.data.response.body.items.item,
      ]);
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCityData();
  }, []);

  useEffect(() => {
    const interceptor = new IntersectionObserver(interception);
    if (interceptor) {
      interceptor.observe(divElement.current);
    }
    return () => {
      interceptor.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, petData, petCode.petsCode, cityDataCode]);

  useEffect(() => {
    setPage(1); // 페이지를 초기화
    setPetData([]); // 펫 데이터 초기화
    setHashMore(true); // hashMore 상태 초기화
    getPetData(); // 새로운 펫 데이터 불러오기
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petCode.petsCode, cityDataCode]);

  return (
    <div>
      <div>
        <div className="select_container">
          <h1>시도별 유기동물 정보</h1>
          <PetsSelect cityData={cityData} setCityDataCode={setCityDataCode} />
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
