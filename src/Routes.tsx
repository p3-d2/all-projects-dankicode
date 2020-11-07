import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import DankiCodeLanding from './pages/DankiCodeLanding'
import FacebookClone from './pages/FacebookClone'
import CenasLanding from './pages/CenasLanding'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dankicode-landing" component={DankiCodeLanding} />
        <Route path="/facebook-clone" component={FacebookClone} />
        <Route path="/cenas-landing" component={CenasLanding} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
