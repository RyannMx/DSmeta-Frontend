import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './style.css';

function Salescard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 730));
  const max = new Date();

  const [minData, setMinDate] = useState(min);
  const [maxData, setMaxDate] = useState(max);

  useEffect(() => {
    axios.get("https://dsmeta-ryan.herokuapp.com/sales")
      .then(response => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="card">
      <p className="paragraph">Vendas</p>

      <div className="input-container">
        <div >
          <DatePicker
            selected={minData}
            onChange={(date: Date) => setMinDate(date)}
            className="input"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <DatePicker
            selected={maxData}
            onChange={(date: Date) => setMaxDate(date)}
            className="input"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show">Data</th>
              <th>Vendendor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#654</td>
              <td className="show">05/02/2016</td>
              <td>Jonas</td>
              <td className="show992">74</td>
              <td className="show992">45</td>
              <td>R$ 50922</td>
              <td>
                <div className="logo-red-container">
                  <NotificationButton></NotificationButton>
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#654</td>
              <td className="show">05/02/2016</td>
              <td>Jonas</td>
              <td className="show992">74</td>
              <td className="show992">45</td>
              <td>R$ 50922</td>
              <td>
                <div className="logo-red-container">
                  <NotificationButton></NotificationButton>
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#654</td>
              <td className="show">05/02/2016</td>
              <td>Jonas</td>
              <td className="show992">74</td>
              <td className="show992">45</td>
              <td>R$ 50922</td>
              <td>
                <div className="logo-red-container">
                  <NotificationButton></NotificationButton>

                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#654</td>
              <td className="show">05/02/2016</td>
              <td>Jonas</td>
              <td className="show992">74</td>
              <td className="show992">45</td>
              <td>R$ 50922</td>
              <td>
                <div className="logo-red-container">
                  <NotificationButton></NotificationButton>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Salescard;