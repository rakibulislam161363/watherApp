import Heart from "../../assets/heart.svg";
import RedHeart from "../../assets/heart-red.svg";
import { useEffect, useState } from "react";
import { FevoriteContext, WheatherContext } from "../../context";
import { useContext } from "react";
export default function AddToFavorite() {
  const { fevorite, AddToFevorites, RemoveToFevorite } =
    useContext(FevoriteContext);
  const { wheatherData } = useContext(WheatherContext);
  const { location, latitude, longitude } = wheatherData;

  const [icon, setIcon] = useState(false);
  useEffect(() => {
    const found = fevorite.find((fev) => fev.location === location);
    setIcon(found);
  }, [fevorite, location]);

  const handleFevorite = () => {
    console.log("hellow every one")
    const found = fevorite.find((fev) => fev.location === location);
    console.log(found)
    if (!found) {
      AddToFevorites(location, latitude, longitude);
      console.log(latitude, longitude, location)
    } else {
      RemoveToFevorite(location);
    }

    setIcon(!icon);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFevorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] z-50"
        >
          <span>Add to Favourite</span>
          <img src={icon ? RedHeart : Heart} alt="" />
        </button>
      </div>
    </div>
  );
}
