import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './style.css';
import { BASE_URL } from "../../utils/request";
import { sale } from "../../models/sale";

function Salescard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 730));
  const max = new Date();

  const [minData, setMinDate] = useState(min);
  const [maxData, setMaxDate] = useState(max);

  const [sales, setSales] = useState<sale[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/sales`)
      .then(response => {
        setSales(response.data.content);
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
            {
              sales.map(sale => {
                return (
                  <tr key={sale.id}>
                    <td className="show992">{sale.id}</td>
                    <td className="show">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show992">{sale.visited}</td>
                    <td className="show992">45</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="logo-red-container">
                        <NotificationButton></NotificationButton>
                      </div>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Salescard;