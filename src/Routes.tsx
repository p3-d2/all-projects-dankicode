import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import ProjectOne from './pages/Project-one'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/one" component={ProjectOne} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
