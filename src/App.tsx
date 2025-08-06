import { useState } from 'react'
//@ts-ignore
import { CustomThemeProvider } from 'rufous-ui'
//@ts-ignore
import RufousShowcase from './components/RufousShowcase'

function App() {

  return (
    <CustomThemeProvider>
      <RufousShowcase />
    </CustomThemeProvider>
  )
}

export default App
