import React from "react";
import { useLocation } from "react-router-dom";
import DetailPageCard from "../components/detail/DetailPageCard";

const DetailPage = () => {
  const location = useLocation();
  const petDetailData = location.state.pet;
  console.log(petDetailData);

  return <DetailPageCard petDetailData={petDetailData} />;
};

export default DetailPage;
