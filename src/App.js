import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import styled from 'styled-components'

import FavoriteList from './pages/FavoriteList'
import Main from './pages/Main'

const Icon = styled.img``
const Menu = styled.ul`
  margin-left: 0;
  padding-left: 0;
  display: flex;
  font-size: 18pt;
`
const Page = styled.li`
  list-style-type: none;
  padding: 15px;
  & > a {
    text-decoration: none;
  }
`
const Wrapper = styled.div`
  display: block;
  max-width: 908px;
  margin: auto;
  padding: 50px 0px;
`
export default function App() {
  const [joke, setJoke] = useState('')
  const [favorites, setFavorite] = useState([])

  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(json => setJoke(json.value))
  }

  const addFavoriteJoke = () => {
    if (favorites.length !== 10) {
      let find = favorites.includes(joke)
      const newItems = favorites

      if (!find) {
        newItems.push(joke)
        setFavorite(newItems)
        alert('Шутка добавлена в Избранное')
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }else{
        newItems.splice(newItems.findIndex(e => e === joke),1)
        setFavorite(newItems);
        alert('Шутка удалена из Избранного')
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
    }else{
      const newItems = favorites
      newItems.splice(0,1);
      newItems.push(joke)
      setFavorite(newItems)
      alert('Последняя шутка удалена, а новая добавлена')
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }

  const deleteJoke = (index) => {
    const newItems = favorites
    newItems.splice(index,1)
    setFavorite(newItems)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    const data = localStorage.getItem('favorites')
    if(data){
        setFavorite(JSON.parse(data))
    }
  }

  const deleteAllJoke = () => {
    localStorage.setItem('favorites', JSON.stringify([]))
    const data = localStorage.getItem('favorites')
    if(data){
        setFavorite(JSON.parse(data))
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('favorites')
    if(data){
      setFavorite(JSON.parse(data))
    }
  }, [])

  return (
    <Wrapper>
      <Router>
        <Menu>
          <Link to="/"><Icon src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" /></Link>
          <Page><Link to="/">Главная</Link></Page>
          <Page><Link to="/favorites">Любимые шутки</Link></Page>    
        </Menu>
        <Switch>
          <Route path="/favorites">
            <FavoriteList favorites={favorites} deleteJoke={(index) => deleteJoke(index)} deleteAllJoke={() => deleteAllJoke()}/>
          </Route>
          <Route path="/">
            <Main getJoke={() => getJoke()}  joke={joke} addFavoriteJoke={() => addFavoriteJoke()}/>
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  )
}
