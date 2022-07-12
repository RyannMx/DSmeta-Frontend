
import Header from "./componets/Header"
import NotificationButton from "./componets/NotificationButton"
import Salescard from "./componets/Salescard"

function App() {
  return (
    <>

      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <Salescard></Salescard>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
