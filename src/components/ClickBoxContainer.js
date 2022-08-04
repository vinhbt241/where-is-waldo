import { ClickBox } from "./ClickBox";

const ClickBoxContainer = (props) => {

  const containerStyleComputer = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.numCol}, 1fr)`,
    gridTemplateRows: `repeat(${props.numRow}, 1fr)`,
    backgroundImage: `url('${props.url}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: (props.width ? props.width : "55vw"),
    height: (props.height ? props.height : "41.25vw")
  }

  const containerStyleIpad = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.numCol}, 1fr)`,
    gridTemplateRows: `repeat(${props.numRow}, 1fr)`,
    backgroundImage: `url('${props.url}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: (props.width ? props.width : "80vw"),
    height: (props.height ? props.height : "60vw")
  }

  const allClickBox = [];
  for(let i = 0; i < props.numRow; i++) {
    for(let j = 0; j < props.numCol; j++) {
      allClickBox.push(<ClickBox 
                        key={`c${j}r${i}`} 
                        col={j} 
                        row={i}
                        handleClick={props.handleClick}/>)
    }
  }

  return(
    <div className="ClickBoxContainer" 
      style={ window.innerWidth > 1100 ? containerStyleComputer : containerStyleIpad }>
      {allClickBox !== [] ? allClickBox : ""}
    </div>
  )
}

export { ClickBoxContainer }
