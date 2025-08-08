
import Pin from "../../assets/pin.svg"
import { WheatherContext } from "../../context";
import { useContext } from "react";
import { GetFormateData } from "../../utils/date-utils";
import RainIcon from "../../assets/rainy.svg"
import CloudIcon from "../../assets/cloud.svg"
import HaxeIcon from "../../assets/haze.svg"
import SunIcon from "../../assets/sun.svg"
import ThunderIcon from "../../assets/thunder.svg"

export default function WheatherHeadline() {
  const {wheatherData} = useContext(WheatherContext);
  const {time} = wheatherData;


  function getwheatherIcon(climate){
      switch(climate){
        case "Rain":
          return RainIcon;

        case "Clouds":
          return CloudIcon;

        case "Clear":
          return SunIcon;

        case "Snow":
          return SunIcon;

        case "Thunder":
          return ThunderIcon;

        case "Fog":
          return HaxeIcon;

        case "Haze":
          return HaxeIcon;

        case "Mist":
          return HaxeIcon;


        default:
          return SunIcon

      }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getwheatherIcon(wheatherData.climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(wheatherData.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{wheatherData.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{GetFormateData(time, "time", false)} - {GetFormateData(time, "date", false)}</p>
    </div>
  );
}
