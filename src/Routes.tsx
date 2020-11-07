import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import DankiCodeLanding from './pages/DankiCodeLanding'
import FacebookClone from './pages/FacebookClone'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dankicode-landing" component={DankiCodeLanding} />
        <Route path="/facebook-clone" component={FacebookClone} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
