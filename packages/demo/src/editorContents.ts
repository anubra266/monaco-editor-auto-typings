export const editorContents = `import fetch from 'node-fetch'
import React from 'react'
import * as math from 'mathjs'
import Color from "tinycolor2"
import { createContext } from "@chakra-ui/react-utils"
import { Box, BoxProps } from "@chakra-ui/react"

// Works fine
const [Provider, useContext] = createContext()
const pro: BoxProps = {
    color: 'red.300'
}
const color = Color('red').toHexString()
fetch('https://google.com', { method: 'GET' })
React.useEffect(() => { })
React.useState<string>('Hello')
math.derivative('x^2 + x', 'x')

// Type errors are detected! :)
const { a } = createContext()
const pro2: BoxProps = {
    colord: 'red.300'
}
const colorWrong = Color('red').toBadMethod()
fetch(1337) // Shouldn't be a number!
React.useEffect('I\`m not a function!')
React.useState<number>('Not a number :s')
math.derivative('x^2 + x') // Error, argument missing!`;
