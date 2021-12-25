import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";
import Url from "../components/Url";

export const DesContext = createContext();

export default DesContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [rating, setRating] = useState("");
  const [ref, setRef] = useState(0);
  const [categories, setCategories] = useState([]);

  const getJobs = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/designer/jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setJobs(data.jobs);
  };

  const getUsers = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/designer/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUsers(data.users);
  };

  const accept = async (uid, cid) => {
    const body = new FormData();
    body.append("freelancer_id", uid);
    body.append("card_id", cid);
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/designer/accept", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
  };

  const reject = async (uid, cid) => {
    const body = new FormData();
    body.append("freelancer_id", uid);
    body.append("card_id", cid);
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/designer/reject", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
  };

  const getCategories = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/designer/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setCategories(data.category);
  };

  const context = {
    state: { jobs, rating, ref, users, categories },
    actions: {
      getJobs,
      setRating,
      setRef,
      setUsers,
      getUsers,
      accept,
      reject,
      getCategories,
      setCategories,
    },
  };

  return (
    <DesContext.Provider value={context}>{props.children}</DesContext.Provider>
  );
};
