import { Box, Center, Heading, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from 'react-query'
import mainApiUrl from '../../data/api'

interface RequestDataType {
  page: number
  limit: number
}

interface PokemonListProps {
  count: number
  next: string
  previous: string
  results: Array<PokemonNameUrlProps>
}

interface PokemonNameUrlProps {
  name: string
  url: string
}

const PokemonList = () => {
  return <div>PokemonList</div>
}

export default PokemonList
