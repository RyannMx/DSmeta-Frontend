import './style.css';
import icon from '../../assets/Vector.svg';
import axios from "axios";
import { BASE_URL } from '../../utils/request';

type prpos = {
  saleid: number
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      console.log("sucesso");
    })
}

function NotificationButton({ saleid }: prpos) {
  return (
    <div className="logo-red" onClick={() => handleClick(saleid)}>
      <img src={icon} />
    </div>
  )
}

export default NotificationButton