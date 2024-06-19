import React from 'react'
import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { fonts } from './token'

const theme = extendTheme({ fonts })

type Props = { children: React.ReactNode | React.ReactNode[] }

export default function ProviderTheme({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
