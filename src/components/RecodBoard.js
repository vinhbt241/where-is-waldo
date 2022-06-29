import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const API_URL = "https://where-is-waldo-241.herokuapp.com/api/image_infos";

const RecordBoard = (props) => {
  let params = useParams();
  const [records, setRecords] = useState([])

  const getRecord = async() => {
    const response = await fetch(API_URL + `/${params.id}/player_records`);
    const records = await response.json();
    return records
  }

  useEffect(() => {
    getRecord().then(records => {
      setRecords(records)
    })
  },[props.submitted])

  let sortedRecords = records.sort((recordA, recordB) => {
   if(recordA.timer >= recordB.timer) {
    return 1;
   } else {
    return -1;
   }
  })

  return(
    <div className="RecordBoard">
      <h1>Player Ranking</h1>
      <div className="rank-container">
        {sortedRecords.map((record, index) => {
          return(
            <div key={record.id} className="ranking">
              <div className="name-and-rank">
                <div>{index + 1}.</div>
                <div>{record.name}</div>
              </div>
              <div>
              {(Math.floor(record.timer / 60)) < 10 ? `0${Math.floor(record.timer / 60)}` : Math.floor(record.timer / 60)} : {(record.timer % 60) < 10 ? `0${record.timer % 60}` : record.timer % 60}  
              </div>
            </div>
          )
        })}
      </div>   
    </div>
  )
}

export { RecordBoard }
