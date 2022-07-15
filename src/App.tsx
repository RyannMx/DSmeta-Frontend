import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import NotificationButton from "./components/NotificationButton"
import Salescard from "./components/Salescard"

function App() {
  return (
    <>

      <ToastContainer />
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
