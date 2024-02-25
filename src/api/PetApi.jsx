import axios from "axios";

const request = axios.create({
  baseURL:
    "https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic",
  params: {
    serviceKey:
      "D6HvbqfFj6otDTGY3883h0C51xIplWlMUXEF+l5ZX9DTpTTNODdcI/6StO1BbYtjTAtOOKyj25hhnMVj4ASszw==",
    _type: "json",
  },
});

export default request;
