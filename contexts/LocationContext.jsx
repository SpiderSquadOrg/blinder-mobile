import { createContext, useState, useContext, useEffect } from "react";
import getCountry from "../api/location/getCountry";
import getState from "../api/location/getState";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [countryIso2, setCountryIso2] = useState(null);
  const [stateIso2, setStateIso2] = useState(null);

  useEffect(() => {
    if (countryIso2 === null) return;
    getCountry(countryIso2).then((res) => {
      setCountry(res);
    });
  }, [countryIso2]);

  useEffect(() => {
    if (stateIso2 === null) return;
    getState(countryIso2, stateIso2).then((res) => {
      setState(res);
    });
  }, [stateIso2]);

  const values = {
    country,
    setCountry,
    state,
    setState,
    setCountryIso2,
    setStateIso2,
  };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => useContext(LocationContext);

export { useLocation, LocationProvider };
