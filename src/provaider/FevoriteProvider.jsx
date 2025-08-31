import { useLocalStorage } from "../Hooks";
import { FevoriteContext } from "../context";

const FevoriteProvider = ({ children }) => {
  const [fevorite, setFevorite] = useLocalStorage("fevorite", []);

  const AddToFevorites = (location, latitude, longitude) => {
    const exists = fevorite.find((fev) => fev.location === location);

    if (exists) {
      return;
    }
    setFevorite([
      ...fevorite,
      {
        location: location,
        latitude: latitude,
        longitude: longitude,
      },
    ]);
  };

  const RemoveToFevorite = (location) => {
    const RemoveFev = fevorite.filter((fev) => fev.location !== location);
    setFevorite(RemoveFev);
  };

  return (
    <FevoriteContext.Provider
      value={{ fevorite, AddToFevorites, RemoveToFevorite }}
    >
      {children}
    </FevoriteContext.Provider>
  );
};

export default FevoriteProvider;
