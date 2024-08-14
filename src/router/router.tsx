import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { KakaoCallBackPage } from "../pages/KakaoCallBackPage";
import Auth from "../service/auth";

interface RouterProps {
  auth: Auth;
}

export const Router = ({ auth }: RouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage auth={auth} />} />
        <Route path="/main" element={<MainPage auth={auth} />} />
        <Route path="/callback/kakaotalk" element={<KakaoCallBackPage />} />
      </Routes>
    </BrowserRouter>
  );
};
