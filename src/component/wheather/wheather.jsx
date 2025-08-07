import AddToFavorite from "./AddToFavorite";
import WheatherCondition from "./wheatherCondition";
import WheatherHeadline from "./wheatherHeadline";
import { useWheather } from "../../Hooks";

export default function Wheather() {
  const { loading, error, wheatherData} = useWheather();
  console.log(loading, error, wheatherData)
  return (
    <div className="container">


        {/* 8ae8180b4675d049b4611a050dc1b361 */}
        {/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */}
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddToFavorite />
          <WheatherHeadline />
          <WheatherCondition />
        </div>
      </div>
    </div>
  );
}
