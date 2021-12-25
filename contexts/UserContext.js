import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";
import Url from "../components/Url";

export const UserContext = createContext();

export default UserContextProvider = (props) => {
  const [res, setRes] = useState("");

  const getResume = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/checkToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setRes(data.user.resume);
  };

  const context = {
    state: { res },
    actions: { setRes, getResume },
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};
