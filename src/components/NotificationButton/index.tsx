import './style.css';
import icon from '../../assets/Vector.svg';
import axios from "axios";
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type prpos = {
  saleid: number
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      console.log("sucesso");
      toast.info("SMS foi enviado com sucesso!");
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