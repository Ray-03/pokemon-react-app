import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { PokemonNameUrlProps } from '../data/interfaces'

const PokemonCardSum = (element: PokemonNameUrlProps) => {
  return (
    <Box
      key={element.url.split('/')[6]}
      p={4}
      borderWidth={1}
      mt={4}
      borderRadius={4}
      backgroundColor={'white'}
    >
      <Text>{`Poke ID: ${element.url.split('/')[6]}`}</Text>
      <Text textTransform="capitalize">{element.name}</Text>
    </Box>
  )
}

export default PokemonCardSum
