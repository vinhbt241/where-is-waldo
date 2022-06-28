import { useState } from "react"
import { useParams } from "react-router-dom";

const RecordForm = (props) => {
  const [name, setName] = useState("");

  let params = useParams();

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    props.disableSubmit();

    await fetch("http://127.0.0.1:3000/api/player_records", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        timer: props.timer,
        imageInfoId: params.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  return(
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
      {props.submitted === false &&
      <input type="submit" value="Save Record" className="submit-btn"/>
      }  
    </form>
  )
}

export { RecordForm }
