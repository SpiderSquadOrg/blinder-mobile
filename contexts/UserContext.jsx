import { jwtDecode } from "jwt-decode";
import { createContext, useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getData } from "../utils/storage";
import { decode } from "base-64";

const UserContext = createContext();

global.atob = decode;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [trigger, resetUser] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getData("userInfo");

      if (userInfo === null) {
        navigation.navigate("MainPage");
        return;
      }
      setUser(jwtDecode(userInfo));
    };
    fetchUser();
  }, [navigation, trigger]);

  const values = { user, setUser, resetUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
