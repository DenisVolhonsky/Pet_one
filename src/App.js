import React from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Button } from '@material-ui/core'

function App() {
  return (
    <div>
      <Header>Header</Header>
      <Main>
        <Button variant="contained" color="secondary" size="small">
          Material UI
        </Button>
      </Main>
      <Footer>Footer</Footer>
    </div>
  )
}

export default App
