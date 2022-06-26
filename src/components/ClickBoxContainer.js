import { ClickBox } from "./ClickBox"

const ClickBoxContainer = (props) => {

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.numCol}, 1fr)`,
    gridTemplateRows: `repeat(${props.numRow}, 1fr)`,
    backgroundImage: "url(https://1.bp.blogspot.com/-wBaod_Bz9Sg/TtcrkXV75aI/AAAAAAAABAk/nxLkFHqI_Zo/s1600/Play+Wheres+Waldo+Online+Puzzle+Game+Gobbling+Gluttons+Closeup.jpg)",
    backgroundSize: "contain",
    width: "1024px",
    height: "768px"
  }

  const allClickBox = [];
  for(let i = 0; i < props.numRow; i++) {
    for(let j = 0; j < props.numCol; j++) {
      allClickBox.push(<ClickBox key={`c${j}r${i}`} col={j} row={i}/>)
    }
  }

  return(
    <div className="ClickBoxContainer" style={containerStyle}>
      {allClickBox}
    </div>
  )
}

export { ClickBoxContainer }
