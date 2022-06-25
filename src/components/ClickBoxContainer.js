import { ClickBox } from "./ClickBox"

const ClickBoxContainer = (props) => {

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.numCol}, 1fr)`,
    gridTemplateRows: `repeat(${props.numRow}, 1fr)`
  }

  const allBox = [];
  for(let i = 0; i < props.numRow; i++) {
    for(let j = 0; j < props.numCol; j++) {
      allBox.push(<ClickBox key={`c${j}r${i}`} col={j} row={i}/>)
    }
  }

  return(
    <div className="ClickBoxContainer" style={containerStyle}>
      {allBox}
    </div>
  )
}

export { ClickBoxContainer }
