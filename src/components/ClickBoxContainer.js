import { ClickBox } from "./ClickBox";

const ClickBoxContainer = (props) => {

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.numCol}, 1fr)`,
    gridTemplateRows: `repeat(${props.numRow}, 1fr)`,
    backgroundImage: `url('${props.url}')`,
    backgroundSize: "contain",
    width: (props.width ? props.width : "1024px"),
    height: (props.height ? props.height : "768px")
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
    <div className="ClickBoxContainer" style={containerStyle}>
      {allClickBox !== [] ? allClickBox : ""}
    </div>
  )
}

export { ClickBoxContainer }
