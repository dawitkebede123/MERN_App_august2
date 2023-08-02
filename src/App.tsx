import { useState } from 'react'
import { ChakraProvider,Box,Heading,Button } from '@chakra-ui/react'
import './style.css'

function App() {
  return(
    <Box id='container'>
      <Box id='left_container'></Box>
      <Box id='middle_container'>
        <Box id='arc'></Box>
        <Box id='free'></Box>
      </Box>
      <Box id='right_container'></Box>
    </Box>
  )
}

export default App
