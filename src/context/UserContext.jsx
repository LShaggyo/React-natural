import { createContext, useEffect, useState } from "react";
import { fetchData } from "../hooks/getData";

export const UserContext = createContext({});

export const ContextProvider = ({ children }) => {
  const { data, setData } = fetchData();
  const [filled, setFilled] = useState(false);
  const [dataLiked, setDataLiked] = useState([]);

  useEffect(() => {
    if (data) {
      setDataLiked(data.filter((item) => item.liked));
    }
  }, [data]);

  const sharedState = {
    data,
    setData,
    filled,
    setFilled,
    dataLiked,
    setDataLiked,
  };

  return (
    <UserContext.Provider value={sharedState}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
