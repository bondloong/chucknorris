import React from 'react'
import styled from 'styled-components'
import {DeleteForever} from '@styled-icons/material/DeleteForever'

const FavoriteListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const Favorite = styled.div`
  width: 268px;
  padding: 12px;
  display: flex;
`
const Del = styled(DeleteForever)`
  color: black;
  width:30px;
  cursor: pointer;
`
const Button = styled.button`
  margin: 5px;
  padding: 5px;
  font-size: 14pt;
`
export default function FavoriteList({favorites, deleteJoke, deleteAllJoke}) {
    return (
        <>
        {favorites.length?<Button onClick={() => deleteAllJoke()}>Удалить все шутки</Button>:''}
        <FavoriteListWrapper>
        {   
            favorites && favorites.map((favorite, index) => {
                return(
                    <Favorite key={index}>
                        <div><Del  onClick={() => deleteJoke(index)} title="Удалить"/></div>
                        <div>{favorite}</div>    
                    </Favorite>
                )
            })
        }
        </FavoriteListWrapper>
        </>
    )
}



