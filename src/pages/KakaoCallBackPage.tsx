import { useEffect } from "react";
import axios from "axios";
const { Kakao } = window as any;
import { useNavigate } from "react-router-dom";

export const KakaoCallBackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";
    const REST_API_KEY = "e9f6ff443921e2fde31b2bb1e6855d0e";
    const REDIRECT_URI = "http://localhost:5173/callback/kakaotalk";
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        Kakao.init("e9f6ff443921e2fde31b2bb1e6855d0e");
        if (res.data.access_token) {
          axios
            .post(
              "https://kapi.kakao.com/v2/user/me",
              { data: res.data.access_token },
              {
                headers: {
                  Authorization: `Bearer ${res.data.access_token}`,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((res) => {
              navigate("/main", {
                state: {
                  type: "Kakao",
                  uid: res.data.id.toString(),
                  name: res.data.properties.nickname,
                  email: "",
                  token: res.config.data.substr(5),
                },
              });
            });
        } else {
          navigate("/");
        }
      });
  }, []);

  return <></>;
};
