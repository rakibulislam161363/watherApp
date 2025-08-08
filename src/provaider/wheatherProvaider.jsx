import { WheatherContext } from "../context";
import { useWheather } from "../Hooks";

const WheatherProviders = ({children}) => {
    const {wheatherData, error, loading} = useWheather();
    return(
        <WheatherContext.Provider value={{wheatherData, error, loading}}>
            {children}
        </WheatherContext.Provider>
    )
};


export default WheatherProviders;