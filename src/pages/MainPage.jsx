import axios from '../api/CityApi'
import React, { useEffect, useState } from 'react'
import petAxios from '../api/PetApi'
import './MainPage.css'

const MainPage = () => {
  const [cityData, setCityData] = useState([]);
  const [cityDataCode, setCityDataCode] = useState(6110000);
  const [petData, setPetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [petKind, setPetKind] = useState('');
  const petKindCode = [{ 'name': '전체', 'code': '' }, { 'name': '개', 'code': 417000 }, { 'name': '고양이', 'code': 422400 }, { 'name': '기타', 'code': 429900 }];

  const getCityData = async () => {
    const response = await axios.get('', {
      params: {
        numOfRows: 20,
      }
    })
    setCityData(response.data.response.body.items.item);
  }

  const getPetData = async () => {
    setIsLoading(true);
    //upkind: 개 : 417000, 고양이 : 422400, 기타 : 429900
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const params = {
      // bgnde: 20200101, // 시작일
      // endde: currentDate, // 마지막일
      numOfRows: 10,
      // upkind: petKind, // 동물의 종류
      upr_cd: cityDataCode // 시도코드
    }
    if (petKind) {
      params.upkind = petKind;
    }
    const response = await petAxios.get('', {
      params
    })
    setPetData(response.data.response.body.items.item);
    console.log(response.data.response.body.items.item);
    setIsLoading(false);
  }
  useEffect(() => {
    getCityData();
  }, [])

  useEffect(() => {
    getPetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityDataCode, petKind])


  return (
    <div>
      <select onChange={(code) => setCityDataCode(code.target.value)}>
        {cityData.map((city, index) => (
          <option key={index} value={city.orgCd}>{city.orgdownNm}</option>
        ))}
      </select>
      <select onChange={(code) => setPetKind(code.target.value)}>
        {petKindCode.map((kind, index) => (
          <option key={index} value={kind.code}>{kind.name}</option>
        ))}
      </select>
      {isLoading ? <div>로딩중...</div> :
        <div>
          <h1>시도별 보호 유기동물 정보</h1>
          <table border='1' style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>품종</th>
                <th>성별</th>
                <th>나이</th>
                <th>현재 상태</th>
                <th>사진</th>
              </tr>
            </thead>
            <tbody>

              {petData.map((pet, index) => (
                <tr key={index}>
                  <td >{pet.kindCd}</td>
                  <td >{pet.age}</td>
                  <td >{pet.sexCd === 'M' ? '남아' : '여아'}</td>
                  <td >{pet.processState}</td>
                  <td ><img className='pet_img' src={pet.popfile} alt='사진' /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default MainPage