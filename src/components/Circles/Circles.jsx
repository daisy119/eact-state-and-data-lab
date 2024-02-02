import './Circles.css'

const Circles = (props) => {

  function findClick(idx) {
    props.handleSelection(idx)
  }
  

  return (
    <div className="circles">
      {props.selections.map((selection, idx) =>
        <div 
          key={idx}
          //add conditional rendering
          className={selection? "selected" : ""}
          onClick={()=>findClick(idx)}
        >
          {idx + 1}
        </div>  
      )}
    </div>
  )
}

export default Circles