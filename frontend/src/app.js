import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './styles/main.scss'

// import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MonsterList from './pages/MonsterList'
import SingleMonster from './pages/SingleMonster'
import EncounterGenerator from './pages/EncounterGenerator'

const App = () => {
  return (
    <>
      <HashRouter>
        {/* <Header /> */}

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/monsters' component={MonsterList} />
          <Route exact path='/monsters/:slug' component={SingleMonster} />
          <Route exact path='/encounter/generator' component={EncounterGenerator} />

        </Switch>
      </HashRouter>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
