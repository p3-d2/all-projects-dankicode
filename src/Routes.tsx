import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import ProjectOne from './pages/ProjectOne'
import FacebookClone from './pages/FacebookClone'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/one" component={ProjectOne} />
        <Route path="/facebook-clone" component={FacebookClone} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
