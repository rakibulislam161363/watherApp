import { useContext } from "react";
import { FevoriteContext, LocationContext } from "../../context";

export default function FavouriteList() {
  const { fevorite } = useContext(FevoriteContext);
  const {setSelectedItem} = useContext(LocationContext);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {fevorite.length > 0 ? (
          fevorite.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              <a href="#" onClick={() => setSelectedItem(fav)} >{fav.location}</a>
            </li>
          ))
        ) : (
          <p>no added any location</p>
        )}
      </ul>
    </div>
  );
}
