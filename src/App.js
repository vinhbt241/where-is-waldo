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
      <h1>Where's Waldo?</h1>
      <p>
        <i>Waldo likes to travel around the world, and take pictures, too! Can you spot Waldo and his friends? Choose one picture and find out!</i>
      </p>

      {imageInfos.map(info => {
        return(
          <Link key={info.id} to={`/${info.id}`} style={{ textDecoration: 'none' }}>
            <div className="link-container">
              <h2>{info.name}</h2>

              <ClickBoxContainer
              url={info.url}
              width={"200px"}
              height={"150px"}/>
            </div>
          </Link>
        )
      })}

      <p>
        <i>More pictures coming soon...</i>
      </p>
    </div>
  );
}

export default App;
