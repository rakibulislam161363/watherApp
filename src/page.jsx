import Header from "./component/header/header";
import Wheather from "./component/wheather/wheather";
import { WheatherContext } from "./context";
import { useContext, useEffect, useState } from "react";
import ClearSky from "./assets/backgrounds/clear-sky.jpg";
import FewClouds from "./assets/backgrounds/few-clouds.jpg";
import Mist from "./assets/backgrounds/mist.jpeg";
import RainyDay from "./assets/backgrounds/rainy-day.jpg";
import ScatteredClouds from "./assets/backgrounds/scattered-clouds.jpg";
import Snow from "./assets/backgrounds/snow.jpg";
import Thunderstorm from "./assets/backgrounds/thunderstorm.jpg";
import Winter from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { wheatherData, loading } = useContext(WheatherContext);
  const [climateImg, setClimateImg] = useState("");

  function getBackgroundImg(climate) {
    switch (climate) {
      case "Rain":
        return RainyDay;

      case "Clouds":
        return ScatteredClouds;

      case "Clear":
        return ClearSky;
      case "Snow":
        return Snow;
      case "Thunder":
        return Thunderstorm;
      case "Fog":
        return Winter;
      case "Haze":
        return FewClouds;
      case "Mist":
        return Mist;
      default:
        return ClearSky;
    }
  }

  useEffect(() => {
    const bgImg = getBackgroundImg(wheatherData.climate)
    setClimateImg(bgImg);
  }, [wheatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex w-96 mt-10 mx-auto p-8 rounded-md bg-gray-400">
          <p className="text-3xl text-center text-black">{loading.massage}</p>
        </div>
      ) : (
        <div>
          <Header />
          <div
        style={{backgroundImage: `url("${climateImg}")`}}
         className="h-screen bg-no-repeat bg-cover">
          
          <main className="mt-0">
            <section>
              <Wheather />
            </section>
          </main>
        </div>
        </div>
        
      )}
    </>
  );
}
