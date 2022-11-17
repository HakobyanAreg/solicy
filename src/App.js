import './App.scss';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Main from "./pages/Main";
import Instruction from "./components/instruction/Instruction";
import {useCallback} from "react";
import {useLocalStorage} from "./hooks";

function App() {
  const [cards, setCards] = useLocalStorage('cards', [])

  const generateCard = () => {
    const cardNumber = Math.floor(Math.random() * 1000 + 1)
    if (cards.includes(cardNumber)) {
      return generateCard()
    }
    return cardNumber
  }

  const addCard = useCallback(() => {
    setCards([...cards, generateCard()])
  }, [cards])

  const removeCard = useCallback((e, id) => {
    setCards([...cards.filter(item => item !== id)])
  }, [cards])


  const sortCards = useCallback(() => {
    setCards([...cards.sort((a, b) => a - b)])
  }, [cards])

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <section>
            <Header addCard={addCard} sortCards={sortCards}/>
          </section>
          <section>
            <Main removeCard={removeCard} cards={cards}/>
          </section>
          <section>
            <Footer/>
          </section>
        </div>
        <div className="instruction">
          <section>
            <Instruction/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
