const ClickBox = (props) => {
  
  const handleClick = (e) => {
    props.handleClick(e, props.row, props.col);
  }

  return(
    <button className="ClickBox" onClick={e => handleClick(e)}>
    </button>
  )
}

export { ClickBox }
