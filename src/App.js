import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import { ClickBoxContainer } from './components/ClickBoxContainer';

const API_URL = "http://127.0.0.1:3000/api/image_infos";

const getImageInfos = async () => {
  const response = await fetch(API_URL);
  const imageInfos = await response.json();
  return imageInfos
}

function App() {
  const [imageInfos, setImageInfos] = useState([]);

  useEffect(() => {
    getImageInfos().then(infoArr => {
      setImageInfos(infoArr)
    })
  }, [])

  return (
    <div className="App">
      {imageInfos.map(info => {
        return(
          <Link key={info.id} to={`/${info.id}`}>
            <div>
              <h1>{info.name}</h1>

              <ClickBoxContainer
              url={info.url}
              width={"200px"}
              height={"150px"}/>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default App;
