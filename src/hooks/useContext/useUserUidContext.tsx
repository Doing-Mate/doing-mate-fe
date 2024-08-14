import { useContext } from "react";
import { UserUIDContext } from "../../context/dataContext";

export const useUserUIDContext = () => {
  const userUIDContext = useContext(UserUIDContext);
  if (userUIDContext === undefined) {
    throw new Error("useUserUIDContext should be used within Provider");
  }
  return userUIDContext;
};
