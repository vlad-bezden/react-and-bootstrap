import React from 'react'
import { Button } from 'react-bootstrap'

const App = ({ message = 'Hello React!' }) => (
  <Button bsStyle='primary' bsSize='large'>{message}</Button>
)

App.propTypes = {
  message: React.PropTypes.string
}

export default App
