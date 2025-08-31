import Page from "./page";
import { LocationProvider, WheatherProviders } from "./provaider";
import {FevoriteProvider} from "./provaider";

function App() {
  return (
    <LocationProvider>
    <WheatherProviders>
      <FevoriteProvider>
        <Page />
      </FevoriteProvider>
    </WheatherProviders>
    </LocationProvider>
  );
}

export default App;
