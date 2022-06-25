const ClickBox = (props) => {
  return(
    <button className="ClickBox">
      [{props.row}, {props.col}]
    </button>
  )
}

export { ClickBox }
