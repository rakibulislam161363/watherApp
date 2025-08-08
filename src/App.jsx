import Header from "./component/header/header"
import Wheather from "./component/wheather/wheather"
import { WheatherProviders } from "./provaider"

function App() {
  return (
    <WheatherProviders>
    <div className="h-screen">
    <Header />
    <main className="mt-20">
      <section>
        <Wheather />
      </section>
    </main>
    </div>
    </WheatherProviders>
   
  )
}

export default App
