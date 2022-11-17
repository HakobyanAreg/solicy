import './Header.scss';

const Header = ({addCard, sortCards}) => (
  <header className="header">
    <div className="btn-group">
      <button className="add" onClick={addCard}>
        Add Card
      </button>
      <button className="sort" onClick={sortCards}>
        Sort Cards
      </button>
    </div>
  </header>
)

export default Header