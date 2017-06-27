import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {
  Navbar
} from 'react-bootstrap'

const store = createStore(reducer)

render(
  <Navbar fixedTop={true} inverse={true}>
    <Navbar.Header>
      <Navbar.Brand>Redux Todos with Undo Example</Navbar.Brand>
    </Navbar.Header>
  </Navbar>,
  document.getElementById('appbar')
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

