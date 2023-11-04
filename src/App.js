import './App.css'
import {Route, Switch} from 'react-router-dom'
import Popular from './components/Popular'
import TopRated from './components/Top-rated'
import Upcoming from './components/Upcoming'

const App = () => (
  <Switch>
    <Route exact path="/" component={Popular} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/upcoming" component={Upcoming} />
  </Switch>
)

export default App
