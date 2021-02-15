import React from 'react'
import styled from 'styled-components'

import JokeInterval from '../components/JokeInterval'

const Button = styled.button`
  margin: 5px;
  padding: 5px;
  font-size: 14pt;
`

export default function Main({getJoke, joke, addFavoriteJoke}) {
  return (
    <div className="App">
     <Button onClick={() => getJoke()}>Получить шутку</Button>
     <JokeInterval getJoke={() => getJoke()}/>
     <p>{joke}</p>
     <Button onClick={() => addFavoriteJoke()}>Избранное</Button>
    </div>
  );
}
