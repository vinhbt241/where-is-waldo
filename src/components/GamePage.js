import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClickBoxContainer } from "./ClickBoxContainer";

const API_URL = "http://127.0.0.1:3000/api/image_infos"

const GamePage= (props) => {
  const [imageInfo, setImageInfo] = useState([]);
  const [characters, setCharacters] = useState([]);

  let params = useParams();

  const getImageInfo = async () => {
    const response = await fetch(API_URL +`/${params.id}}`);
    const imageInfo = await response.json();
    return imageInfo
  }

  const getCharacters = async () => {
    const response = await fetch(API_URL + `/${params.id}/characters`);
    const characters = await response.json();
    return characters
  }

  useEffect(() => {
    getImageInfo().then(info => {
      setImageInfo(info);
    })

    getCharacters().then(arrChars => {
      setCharacters(arrChars);
    })
  }, [])

  return(
    <div>
      <ClickBoxContainer 
      url = {imageInfo.url}
      numRow = {imageInfo.num_row}
      numCol = {imageInfo.num_col}/>
    </div>
  )
}

export { GamePage }
