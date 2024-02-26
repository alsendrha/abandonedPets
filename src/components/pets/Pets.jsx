import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../api/CityApi";
import petAxios from "../../api/PetApi";
import MoreButton from "./MoreButton";
import PetCard from "./PetCard";
import "./Pets.css";
import PetsSelect from "./PetsSelect";
import { PetsSelectContext } from "./PetsSelectContext";

const Pets = ({ id }) => {
  const [cityData, setCityData] = useState([]);
  const [cityDataCode, setCityDataCode] = useState(6110000);
  const [petData, setPetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const petCode = useContext(PetsSelectContext);
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
    const params = {
      numOfRows: 10,
      pageNo: 1,
      upkind: id === 1 ? 417000 : id === 2 ? 422400 : 429900,
      upr_cd: cityDataCode,
    };

    const response = await petAxios.get("", {
      params,
    });
    if (
      !response.data.response.body.items ||
      response.data.response.body.items === 0
    )
      return alert("해당 지역에는 유기동물 정보가 없습니다.");
    else {
      setPetData(response.data.response.body.items.item);
      console.log(response.data.response.body.items.item);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCityData();
  }, []);

  useEffect(() => {
    getPetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityDataCode, petCode.petsCode]);
  if (!petData) return <div>로딩중...</div>;
  return (
    <div>
      <div>
        <h1>{`시도별 유기동물 정보 (${
          id === 1 ? "개" : id === 2 ? "고양이" : "기타"
        })`}</h1>
        <div className="container">
          <div className="select_menus">
            <PetsSelect cityData={cityData} setCityDataCode={setCityDataCode} />
            <MoreButton id={id} />
          </div>
          {isLoading ? (
            <div className="loading_container">로딩중...</div>
          ) : (
            <div className="pets_container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={3}
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
      <br />
    </div>
  );
};

export default Pets;
