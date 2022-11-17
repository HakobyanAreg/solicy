import './Card.scss';
import {ReactComponent as RemoveBtn} from "../../assets/icons/remove.svg";

const Card = ({number, removeCard}) => {
  return (
    <div className="card-wrapper">
      <div className="close-btn-wrapper">
          {<RemoveBtn className="close-btn" onClick={(e) => removeCard(e, number)} />}
      </div>
      <div className="card-content">
        {number}
      </div>
    </div>
  )
}

export default Card