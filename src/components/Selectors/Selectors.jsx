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
          className={`selector-button`}
          onClick={()=>findClick(idx)}
        >
          Button {idx + 1}
        </button>
      )}
    </div>
  )
}

export default Selectors