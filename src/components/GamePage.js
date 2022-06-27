import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClickBoxContainer } from "./ClickBoxContainer";
import { CharacterPortrait } from "./CharacterPortrait";

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

  const checkCharacter = (event, row, col) => {
    const characterInBox = characters.filter(char => {
      return (row === char.row && col === char.col)
    })

    if(characterInBox.length !== 0) {
      event.target.style.opacity = "1";
    }
  }

  return(
    <div className="GamePage">
      <div className="container">
        <div className="side-container">
          <div>
            <strong>Timer</strong>
            Timer go here
          </div>

          {characters.map(character => {
            return(
              <CharacterPortrait 
              key={`r${character.row}c${character.col}`}
              name={character.name} 
              row={character.row}
              col={character.col}/>
            )
          })}
        </div>
        <ClickBoxContainer
        url = {imageInfo.url}
        numRow = {imageInfo.num_row}
        numCol = {imageInfo.num_col}
        handleClick={checkCharacter}/>
      </div>
    </div>
  )
}

export { GamePage }
