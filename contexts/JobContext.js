import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";
import Url from "../components/Url";

export const JobContext = createContext();

export default JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [rating, setRating] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [accJobs, setAccJobs] = useState([]);
  const [ref, setRef] = useState(0);

  const getJobs = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/ownCard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setJobs(data.cards);
  };

  const getAllJobs = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/card", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setAllJobs(data.cards);
  };

  const getAccJobs = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/accepted", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setAccJobs(data.cards);
  };

  const context = {
    state: { jobs, rating, allJobs, accJobs, ref },
    actions: { getJobs, getAllJobs, getAccJobs, setRating, setAllJobs, setRef },
  };

  return (
    <JobContext.Provider value={context}>{props.children}</JobContext.Provider>
  );
};
