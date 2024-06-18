import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { fonts } from './token'

const theme = extendTheme({ fonts })

type Props = { children: React.ReactNode | React.ReactNode[] }

export default function ProviderTheme({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
