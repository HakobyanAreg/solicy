import "./Instruction.scss";

const Instruction = () => {
  return (
    <div className="instruction-wrapper">
      <p className="instruction-content">
        Press the "Add card" button to add the new Card.
        Use the "Sort cards" button to sort the Cards by the increase.
        Press an X icon on the top right to delete them.
      </p>
    </div>
  )
}

export default Instruction