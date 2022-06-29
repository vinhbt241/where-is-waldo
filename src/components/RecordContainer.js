import { useState } from "react";
import { RecordBoard } from "./RecodBoard";
import { RecordForm } from "./RecordForm";
import { Link } from "react-router-dom";

const RecordContainer = (props) => {
  const [submit, setSubmit] = useState(false);

  const disableSubmit = () => {
    setSubmit(true);
  }

  const restart = () => {
    document.location.reload();
  }

  return(
    <div className="RecordContainer"> 
      <RecordForm timer={props.timer} submitted={submit} disableSubmit={disableSubmit}/>
      <RecordBoard submitted={submit}/>
      <div className="record-nav">
        <Link to="/where-is-waldo/"><button className="record-to-home">Return Home</button></Link>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  )
}

export { RecordContainer }
