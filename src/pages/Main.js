import "./Main.scss"
import Card from "../components/card/Card";

const Main = ({cards, removeCard}) => (
  <div className="main">
    {!!cards.length ?
      cards.map(item => (
        <Card key={item} number={item} removeCard={removeCard}/>
      ))
      :
      <p>
        Please add card
      </p>
    }
  </div>
)


export default Main