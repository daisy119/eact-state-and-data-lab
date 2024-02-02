import { useState } from "react"
import './CircleSelector.css'
import Circles from "../../components/Circles/Circles"
import Selectors from "../../components/Selectors/Selectors"


const CircleSelector = () => {
  // state is initialized as false for all circles
  // you'll write code to change the selected index to true on click
  const [selections, setSelections] = useState([false, false, false, false])

  function handleSelection(selectedIdx) {
    //set newSelections after mapping
    const newSelections =selections.map((selection,idx) => {
      //if button or cirle is selected
      if (idx ===selectedIdx){
        return true
      } else {
        return false
      }
    })
    //update selections state by putting newSelections into setSelections
    setSelections(newSelections)
  }

  return ( 
    <main>
      {/* pass as prop to circles and selectors */}
      <Circles handleSelection={handleSelection} selections={selections} />
      <Selectors handleSelection={handleSelection} selections={selections} />
    </main>
  )
}

export default CircleSelector