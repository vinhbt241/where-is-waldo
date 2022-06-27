import { useState } from "react"

const RecordForm = (props) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(props.timer);
  }

  return(
    <div className="record-form-container">
      <form className="RecordForm" onSubmit={handleSubmit}>
        <label>
          Enter Your Name
          <input type="text" onChange={handleChange} />
        </label>
        <div className="timer-record">
          <div>Your Record:</div> 
          {(Math.floor(props.timer / 60)) < 10 ? `0${Math.floor(props.timer / 60)}` : Math.floor(props.timer / 60)} : {(props.timer % 60) < 10 ? `0${props.timer % 60}` : props.timer % 60}
        </div>
        <input type="hidden" value={props.timer}/>
        <input type="submit" value="Save Record" className="submit-btn"/>
      </form>
    </div>
  )
}

export { RecordForm }
