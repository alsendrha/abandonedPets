import axios from "../../api/CityApi";
import React, { useEffect, useState } from "react";
import petAxios from "../../api/PetApi";
import "./Pets.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PetsMenu from "./PetsSelect";
import PetCard from "./PetCard";

const Pets = () => {
  const [cityData, setCityData] = useState([]);
  const [cityDataCode, setCityDataCode] = useState(6110000);
  const [petData, setPetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [petKind, setPetKind] = useState("");

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
      numOfRows: 10,
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
        <h1>시도별 유기동물 정보</h1>
        <div className="container">
          <PetsMenu
            cityData={cityData}
            setCityDataCode={setCityDataCode}
            setPetKind={setPetKind}
          />
          {isLoading ? (
            <div className="loading_container">로딩중...</div>
          ) : (
            <div className="pets_container">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={3}
                // navigation
              >
                {petData.map((pet, index) => (
                  <SwiperSlide key={index}>
                    <PetCard pet={pet} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pets;
