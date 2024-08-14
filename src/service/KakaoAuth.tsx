import axios from "axios";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const KakaoAuth = () => {
  const navigate = useNavigate();

  const initKakao = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("e9f6ff443921e2fde31b2bb1e6855d0e");
    }
  };

  const onLoginWithKakao = () => {
    initKakao();
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173/callback/kakaotalk",
    });
  };

  const onLogoutWithKaKao = (token: string) => {
    axios({
      method: "POST",
      url: "https://kapi.kakao.com/v1/user/logout",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log("e : ", e);
        if (e.response.data.code === -401) {
          navigate("/");
        }
      });
  };

  return { onLoginWithKakao, onLogoutWithKaKao };
};
