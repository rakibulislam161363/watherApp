import Header from "./component/header/header"
import Wheather from "./component/wheather/wheather"


function App() {
 

  return (
    <div className="h-screen">
    <Header />
    <main className="mt-20">
      <section>
        <Wheather />
      </section>
    </main>
    </div>
  )
}

export default App
