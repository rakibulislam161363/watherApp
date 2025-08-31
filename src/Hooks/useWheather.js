import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWheather = () => {
  const [wheatherData, setWheatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    status: false,
    massage: "",
  });

  const [error, setError] = useState(null);
  const { selectedItem } = useContext(LocationContext);

  const fetechWheather = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        status: true,
        massage: "Featching wheather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WHETHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errowMassage = `featching wheather data failed: ${response.status}`;

        throw new Error(errowMassage);
      }

      const data = await response.json();

      const updateWhetherData = {
        ...wheatherData,
        location: data.name,
        climate: data.weather[0].main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWheatherData(updateWhetherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        status: false,
        massage: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      ...loading,
      status: true,
      massage: "please waight finding data",
    });

    if (selectedItem.latitude && selectedItem.longitude) {
      fetechWheather(selectedItem.latitude, selectedItem.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetechWheather(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedItem.latitude, selectedItem.longitude]);

  return {
    wheatherData,
    error,
    loading,
  };
};

export default useWheather;
