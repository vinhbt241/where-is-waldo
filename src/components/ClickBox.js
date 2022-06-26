const ClickBox = (props) => {
  const displayCoordinate = () => {
    console.log(props.row, props.col)
  }

  return(
    <button className="ClickBox" onClick={displayCoordinate}>
    </button>
  )
}

export { ClickBox }
