import './Selectors.css'

const Selectors = (props) => {

function findClick(idx) {
  props.handleSelection(idx)
}

  return (
    <div className="selector">
      {props.selections.map((selection, idx) =>
        <button 
          key={idx}
          //add conditional rendering
          className={selection? "selected" : ""}
          onClick={()=>findClick(idx)}
        >
          Button {idx + 1}
        </button>
      )}
    </div>
  )
}

export default Selectors