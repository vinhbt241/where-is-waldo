import greenTick from "../images/green-tick.png"

const CharacterPortrait = (props) => {
  const portraitStyle = {
    backgroundImage: `url('${props.url}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  }

  return(
    <div className="CharacterPortrait">
      <div className="img-container" style={portraitStyle}>
        <img src={greenTick} alt=""
        style={props.mark ? { opacity: "1"} : { opacity: "0"}}/>
      </div>
      {props.name}
    </div>
  )
}

export {CharacterPortrait}
