import TempMin from "../../assets/icons/temp-min.svg";
import TempMax from "../../assets/icons/temp-max.svg";
import Cloud from "../../assets/icons/cloud.svg";
import Humidity from "../../assets/icons/humidity.svg";
import Wind from "../../assets/icons/wind.svg";
import { WheatherContext } from "../../context";
import { useContext } from "react";

export default function WheatherCondition() {
  const {wheatherData} = useContext(WheatherContext);
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstorm with light drizzle
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{wheatherData.maxTemperature}°</p>
            <img src={TempMax} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{wheatherData.minTemperature}°</p>
            <img src={TempMin} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{wheatherData.humidity}%</p>
            <img src={Humidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{wheatherData.cloudPercentage}%</p>
            <img src={Cloud} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wheatherData.wind}km/h</p>
            <img src={Wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
