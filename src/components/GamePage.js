import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClickBoxContainer } from "./ClickBoxContainer";
import { CharacterPortrait } from "./CharacterPortrait";
import { RecordContainer } from "./RecordContainer";

const API_URL = "http://127.0.0.1:3000/api/image_infos";

const GamePage= () => {
  const [imageInfo, setImageInfo] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [mark, setMark] = useState(
    [{name: "Waldo", marked: false},
    {name: "Wilma", marked: false},
    {name: "Wizard Whitebeard", marked: false},
    {name: "Odlaw", marked: false}]
  );
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [toggleForm, setToggleForm] = useState(false);

  let params = useParams();

  const checkCharacter = (event, row, col) => {
    const characterInBox = characters.find(char => {
      return (row === char.row && col === char.col)
    })

    if(characterInBox) {
      event.target.style.opacity = "1";

      const newMark = mark.map(character => {
        if(character.name === characterInBox.name) {
          character.marked = true
        }
        return character
      })

      setMark(newMark);
    }
  }

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

  useEffect(() => {
    let timerID = undefined;

    if(timerRunning) {
      timerID = setInterval(() => {
        setTimer(prevTimer => (prevTimer + 1));
      }, 1000)
    } else if (!timerRunning) {
      clearInterval(timerID);
    }

    return () => clearInterval(timerID);
  }, [timerRunning])

  useEffect(() => {
    let allMarked = mark.every(character => {
      return(character.marked)
    })

    if(allMarked) {
      setToggleForm(true);
      setTimerRunning(false);
    }
  }, [mark])

  return(
    <div className="GamePage">
      {toggleForm && <RecordContainer timer={timer}/>}

      <div className="container">
        <div className="side-container">
          <div className="timer-container">
            <strong>Timer</strong>
            <br />
            {(Math.floor(timer / 60)) < 10 ? `0${Math.floor(timer / 60)}` : Math.floor(timer / 60)} 
            : 
            {(timer % 60) < 10 ? `0${timer % 60}` : timer % 60}
          </div>

          {characters.map(character => {
            let characterMark = mark.find(char => {
              return char.name === character.name
            })

            return(
              <CharacterPortrait 
              key={`r${character.row}c${character.col}`}
              url={character.url}
              name={character.name} 
              row={character.row}
              col={character.col}
              mark={characterMark.marked}/>
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
